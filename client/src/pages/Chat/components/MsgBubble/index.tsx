import React from "react";
import clsx from "clsx";
import { DateTime } from "luxon";

import type { ChatMessage } from "proto/chat";

interface IMsgBubbleProps {
  className?: string;
  msgData: ChatMessage;
}

function MsgBubble({ className = "", msgData }: IMsgBubbleProps) {
  //VARIABLES
  const isMine = msgData.from === localStorage.getItem("username");

  return (
    <div className={clsx(["", className])}>
      <div
        className={clsx(
          "w-4/5 sm:w-2/3 md:w-1/2",
          isMine ? "me-auto ms-3" : "ms-auto me-3"
        )}
      >
        <p
          className={clsx(
            "text-tDisabled text-par-light w-full truncate",
            isMine ? "text-right" : "text-left"
          )}
        >
          {msgData.from}
        </p>
        <div
          className={clsx(
            "p-4 rounded-lg drop-shadow-md relative",
            isMine ? "bg-primary" : "bg-sDisabled "
          )}
        >
          <p
            className={clsx(
              "whitespace-break-spaces break-words text-par-medium",
              isMine ? "text-tSecondary" : "text-tPrimary"
            )}
          >
            {msgData.msg}
          </p>
          <div
            className={clsx(
              "h-4 w-4 border-[1rem] absolute bottom-0 border-transparent",
              isMine
                ? "-right-3 border-b-primary"
                : "-left-3 border-b-sDisabled"
            )}
          ></div>
        </div>
        <p
          className={clsx(
            "text-tDisabled text-sub3-light w-full italic mt-1",
            isMine ? "text-right ms-2" : "text-left me-2"
          )}
        >
          {DateTime.fromISO(msgData.time).toFormat("yy/LL/dd HH:mm")}
        </p>
      </div>
    </div>
  );
}

export default React.memo(
  MsgBubble,
  (prevProps, nextProps) => prevProps.msgData?.id === nextProps?.msgData?.id
);
