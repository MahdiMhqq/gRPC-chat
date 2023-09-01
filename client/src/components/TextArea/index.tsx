import React from "react";
import clsx from "clsx";
import TextareaAutosize, {
  type TextareaAutosizeProps,
} from "react-textarea-autosize";

interface ITextAreaProps
  extends Omit<TextareaAutosizeProps, "className" | "ref"> {
  className?: string;
  error?: string | boolean;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, ITextAreaProps>(
  ({ className, error, ...rest }, ref) => {
    return (
      <TextareaAutosize
        className={clsx([
          "rounded-lg text-tPrimary bg-sPrimary p-3 text-button-medium placeholder:text-par-medium placeholder:text-tDisabled border border-linePrimary !outline-0 focus:shadow-inputFocus caret-primary transition-all duration-300 custom-scroll",
          rest.disabled && "text-tDisabled bg-sDisabled",
          error &&
            "!text-error !caret-error !shadow-inputError focus:!shadow-inputErrorFocus",
          className,
        ])}
        minRows={1}
        maxRows={5}
        ref={ref}
        {...rest}
      />
    );
  }
);

Textarea.displayName = "Textarea";

export default Textarea;
