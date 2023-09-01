/****************************************************************************  CONFIGS AND IMPORTS  */
const grpc = require("grpc");
const protoLoader = require("@grpc/proto-loader");

const PROTO_PATH = "chat.proto";

const SERVER_PATH = "0.0.0.0";
const SERVER_PORT = 9090;

const SERVER_URI = SERVER_PATH + ":" + SERVER_PORT;

const usersInChat = [];
const observers = [];

const packageDefinition = protoLoader.loadSync(PROTO_PATH);
const protoDescriptor = grpc.loadPackageDefinition(packageDefinition);

/****************************************************************************  HANDLERS  */
const join = (call, callback) => {
  const user = call.request;

  // CHECK IF THAT USERNAME ALREADY EXITS
  const userExist = usersInChat.find((_user) => _user.name == user.name);
  if (!userExist) {
    usersInChat.push(user);
    callback(null, {
      error: 0,
      msg: "Success",
    });
  } else {
    callback(null, {
      code: grpc.status.ALREADY_EXISTS,
      details: "user already exist.",
    });
  }
};

const sendMsg = (call, callback) => {
  const chatObj = call.request;
  observers.forEach((observer) => {
    observer.call.write(chatObj);
  });
  callback(null, {});
};

const getAllUsers = (_call, callback) => {
  callback(null, { users: usersInChat });
};

const receiveMsg = (call, _callback) => {
  observers.push({
    call,
  });
};

const server = new grpc.Server();

server.addService(protoDescriptor.ChatService.service, {
  join,
  sendMsg,
  getAllUsers,
  receiveMsg,
});

server.bind(SERVER_URI, grpc.ServerCredentials.createInsecure());

/******************************************** FAKE DATA */
if (process.env.ENVIRONMENT == "development") {
  const { fakerFA: faker } = require("@faker-js/faker");

  for (let i = 0; i < 100; i++) {
    usersInChat.push({
      name: faker.internet.userName(),
      id: faker.string.uuid(),
    });
  }

  setInterval(() => {
    observers.forEach((observer) => {
      observer.call.write({
        from: usersInChat[Math.floor(Math.random() * 100)].name,
        time: new Date().toISOString(),
        msg: faker.lorem.text(),
        id: faker.string.uuid(),
      });
    });
  }, 5000);
}
/******************************************** FAKE DATA */

server.start();

console.log(`[SERVER] Running at PORT=${SERVER_PORT}`);
