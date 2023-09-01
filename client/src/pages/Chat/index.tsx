import MsgTextArea from "./components/MsgTextArea";
import UsersList from "./components/UsersList";
import MsgList from "./components/MsgList";

function ChatPage() {
  return (
    <div className="h-[calc(100dvh_-_2rem)] flex gap-x-4">
      <UsersList className="hidden md:flex md:basis-1/3 max-w-[10rem] h-full" />
      <div className="flex flex-col items-stretch h-full md:basis-2/3 lg:basis-auto grow">
        <MsgList />
        <MsgTextArea className="w-full shrink-0 mt-auto" />
      </div>
    </div>
  );
}

export default ChatPage;
