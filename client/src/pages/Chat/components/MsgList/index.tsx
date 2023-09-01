import React, { useEffect, useState } from "react";
import clsx from "clsx";

import MsgBubble from "../MsgBubble";

import { client } from "proto/client";

import type { ChatMessage } from "proto/chat";

interface IMsgListProps {
  className?: string;
}

function MsgList({ className = "" }: IMsgListProps) {
  //STATES
  const [messages, setMessages] = useState<ChatMessage[]>([]);

  //LIFE CYCLE HOOKS
  useEffect(() => {
    const stream = client.receiveMsg({});
    stream.responses.onMessage((msg) => {
      setMessages((prev) => [msg, ...prev]);
    });
  }, []);

  return (
    <section
      className={clsx(
        "flex flex-col-reverse grow custom-scroll max-h-[calc(100dvh_-_6.75rem)] overflow-y-auto pt-[8rem]",
        className
      )}
    >
      {messages?.map((msg) => (
        <MsgBubble msgData={msg} key={msg.id} />
      ))}
    </section>
  );
}

export default React.memo(MsgList);
