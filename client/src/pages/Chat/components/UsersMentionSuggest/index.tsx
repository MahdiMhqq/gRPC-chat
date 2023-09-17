import { useState, useEffect } from "react";
import clsx from "clsx";

import { client } from "proto/client";
import { mentionDetector, newMsgCreator } from "./services";

import type { User } from "proto/chat";

interface IUsersMentionSuggestProps {
  className?: string;
  msg: string;
  onSelect: (newMsg: string) => void;
  cursorPos: number;
}

function UsersMentionSuggest({
  className = "",
  msg,
  onSelect,
  cursorPos,
}: IUsersMentionSuggestProps) {
  //STATES
  const [users, setUsers] = useState<User[]>([]);

  //VARIABLES
  const { open, mention } = mentionDetector(msg, cursorPos);
  const filteredUsers = mention
    ? users.filter((user) => user.name?.includes(mention))
    : users;

  //LIFE CYCLE HOOKS
  useEffect(() => {
    client.getAllUsers({}).then((res) => setUsers(res.response.users));
  }, []);

  return (
    <div
      className={clsx([
        "bg-[#eeeeee50] backdrop-blur-lg rounded-t-lg transition-all flex flex-col py-3 px-2 custom-scroll overflow-y-scroll border ltr",
        open && filteredUsers.length > 0
          ? "max-h-[25vh] shadow-lg border-linePrimary"
          : "!p-0 m-0 max-h-0 translate-y-4 border-transparent",
        className,
      ])}
    >
      {filteredUsers?.map((user) => (
        <p
          key={user.id}
          className="p-1 cursor-pointer text-par text-tPrimary hover:bg-primary20 transition rounded-md"
          onClick={() => onSelect(newMsgCreator(msg, cursorPos, user))}
        >
          @{user.name}
        </p>
      ))}
    </div>
  );
}

export default UsersMentionSuggest;
