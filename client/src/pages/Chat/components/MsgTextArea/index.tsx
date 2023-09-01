import { useRef, useState } from "react";
import clsx from "clsx";
import { Send } from "iconsax-react";

import BasicButton from "components/BasicButton";
import Textarea from "components/TextArea";
import UsersMentionSuggest from "../UsersMentionSuggest";

import { submitHandler, textareaChangeHandler } from "./services";

interface IMsgTextAreaProps {
  className?: string;
}

function MsgTextArea({ className = "" }: IMsgTextAreaProps) {
  //STATES
  const [msgText, setMsgText] = useState("");

  //VARIABLES
  const submit = () => submitHandler(msgText, setMsgText);

  //REF
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const curserPosRef = useRef(msgText.length);

  return (
    <form
      className={clsx("flex items-start gap-x-3", className)}
      onSubmit={(e) => {
        e.preventDefault();
        submit();
      }}
    >
      <div className="shrink-0 grow relative">
        <UsersMentionSuggest
          className="absolute left-0 right-0 bottom-full"
          msg={msgText}
          onSelect={setMsgText}
          cursorPos={curserPosRef.current}
        />
        <Textarea
          ref={textareaRef}
          className="w-full drop-shadow-lg"
          value={msgText}
          onKeyUp={(e) => textareaChangeHandler(e, submit)}
          onChange={(e) => {
            setMsgText(e.target.value);
            curserPosRef.current = textareaRef?.current?.selectionStart ?? 0;
          }}
          onClick={(e) => {
            const textarea = e.target as HTMLTextAreaElement | null;
            curserPosRef.current = textarea?.selectionStart ?? 0;
          }}
        />
      </div>

      <BasicButton
        className="!h-12 !w-12 hover:shadow-xl"
        type="submit"
        disable={msgText.trim() === ""}
      >
        <Send
          variant="Bold"
          size={"2rem"}
          className="text-tSecondary -scale-100"
        />
      </BasicButton>
    </form>
  );
}

export default MsgTextArea;
