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
    callback(null, { error: 1, msg: "user already exist." });
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

server.start();

console.log(`[SERVER] Running at PORT=${SERVER_PORT}`);
