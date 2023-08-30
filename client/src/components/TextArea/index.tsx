import React, { useEffect, useRef } from "react";
import clsx from "clsx";

interface ITextAreaProps
  extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, "className"> {
  className?: string;
  error?: string | boolean;
}

const Textarea = ({ className, error, ...rest }: ITextAreaProps) => {
  //VARIABLES
  const { value } = rest;

  //REFS
  const textareaElement = useRef<HTMLTextAreaElement>(null);

  //LOGIC
  const updateTextareaHeight = () => {
    if (textareaElement.current) {
      const $element = textareaElement.current;

      if ($element.value === "") $element.style.height = `unset`;
      if ($element.scrollHeight < 170) {
        $element.style.height = "auto";
        $element.style.height = `${$element.scrollHeight}px`;
        $element.style.resize = "none";
      }
    }
  };

  //LIFE CYCLE HOOKS
  useEffect(() => {
    updateTextareaHeight();
  }, [value]);

  return (
    <textarea
      className={clsx([
        "rounded-lg text-tPrimary bg-sPrimary p-4 h-14 text-button-medium placeholder:text-par-medium placeholder:text-tDisabled border-none !outline-0 focus:shadow-inputFocus caret-primary transition-all duration-300 custom-scroll",
        rest.disabled && "text-tDisabled bg-sDisabled",
        error &&
          "!text-error !caret-error !shadow-inputError focus:!shadow-inputErrorFocus",
        className,
      ])}
      rows={1}
      ref={textareaElement}
      {...rest}
    />
  );
};

export default Textarea;
