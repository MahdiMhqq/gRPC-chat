import type { User } from "proto/chat";

export const mentionDetector = (msg: string, cursorPos: number) => {
  const subString = msg.slice(0, cursorPos);
  const match = subString.match(/(?<=^|\s)(@[\w.]+)$(?<!\.)/gim);

  if (match && match.length > 0)
    return { open: true, mention: match[0]?.slice(1) };
  else return { open: false, mention: null };
};

export const newMsgCreator = (
  msg: string,
  cursorPos: number,
  selectedUser: User
) => {
  const subString = msg.slice(0, cursorPos);

  const newMsg =
    subString.replace(
      /(?<=^|\s)(@[\w.]+)$(?<!\.)/gim,
      "@" + selectedUser.name
    ) + msg.slice(cursorPos);

  return newMsg;
};
