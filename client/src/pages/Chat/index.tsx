// import { ChatMessage } from "proto/chat_pb.js";

import { ChatMessage } from "proto/chat_pb";
import MsgBubble from "./components/MsgBubble";
import Textarea from "components/TextArea";

function ChatPage() {
  const x: ChatMessage.AsObject = {
    from: "mamad",
    msg: "chetori mamad?",
    time: "2022-08-27T19:42:42Z",
  };
  const y: ChatMessage.AsObject = {
    from: "bagher",
    msg: "chetori mamad?",
    time: "2022-08-27T19:42:42Z",
  };
  return (
    <div className="flex flex-col">
      <section className="flex flex-col-reverse grow custom-scroll h-[calc(100dvh_-_6.75rem)] overflow-y-auto pt-[8rem]">
        <MsgBubble msgData={x} />
        <MsgBubble msgData={y} />
      </section>
      <Textarea className="w-full shrink-0 drop-shadow-2xl mt-4" />
    </div>
  );
}

export default ChatPage;
