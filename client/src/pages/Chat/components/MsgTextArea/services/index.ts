import { DateTime } from "luxon";
import { client } from "proto/client";

import type { ChatMessage } from "proto/chat";

export const textareaChangeHandler = (
  e: React.KeyboardEvent<HTMLTextAreaElement>,
  submitCallback: () => void
) => {
  if (e.key === "Enter" && !e.shiftKey) submitCallback();
};

export const submitHandler = (
  msgText: string,
  setMsgText: React.Dispatch<React.SetStateAction<string>>
) => {
  const username = localStorage.getItem("username");
  if (msgText.trim() !== "" && username) {
    setMsgText("");
    const msg: ChatMessage = {
      msg: msgText,
      time: DateTime.now().toUTC().toISO() as string,
      from: username,
      id: crypto.randomUUID(),
    };
    client.sendMsg(msg).then(() => console.log("[MSG_SEND] Success"));
  }
};
