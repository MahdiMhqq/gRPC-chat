import { useState } from "react";
import { Eye, EyeSlash } from "iconsax-react";

import BasicInput, { IBasicInputProps } from "./BasicInput";

interface IInputProps
  extends Omit<
    IBasicInputProps,
    "type" | "suffixCustomClass" | "prefixCustomClass"
  > {
  type?: "text" | "password" | "suffix" | "prefix" | "number";
  classNames?: {
    wrapper?: string;
    label?: string;
    input?: string;
    suffix?: string;
    prefix?: string;
  };
}

function Input({ type = "text", classNames, ...rest }: IInputProps) {
  //STATES
  const [localType, setLocalType] = useState(type);

  return (
    <>
      {type === "password" ? (
        <BasicInput
          {...rest}
          type={localType}
          onSuffixClick={() =>
            setLocalType((prev) => (prev !== "password" ? "password" : "text"))
          }
          suffix={
            localType !== "password" ? (
              <EyeSlash
                variant="Bold"
                className="text-iPrimary"
                size="1.5rem"
                data-cy="my-input-pass-invisible"
              />
            ) : (
              <Eye
                variant="Bold"
                className="text-iPrimary"
                size="1.5rem"
                data-cy="my-input-pass-visible"
              />
            )
          }
          classNames={{
            ...classNames,
            suffix: `hover:bg-primary/0.2 ${classNames?.suffix ?? ""}`,
          }}
        />
      ) : type === "number" ? (
        <BasicInput {...rest} type={"number"} classNames={classNames} />
      ) : (
        <BasicInput {...rest} type={"text"} classNames={classNames} />
      )}
    </>
  );
}

export default Input;
