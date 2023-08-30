import { useState } from "react";
import { CloseCircle, Eye, EyeSlash, SearchNormal1 } from "iconsax-react";

import BasicInput, { IBasicInputProps } from "../BasicInput";

interface IInputProps
  extends Omit<
    IBasicInputProps,
    "type" | "suffixCustomClass" | "prefixCustomClass"
  > {
  type?: "text" | "password" | "search" | "suffix" | "prefix" | "number";
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
      {type === "text" ? (
        <BasicInput classNames={classNames} type={type} {...rest} />
      ) : type === "password" ? (
        <BasicInput
          {...rest}
          type={localType}
          suffixClick={() =>
            setLocalType((prev) => (prev !== "password" ? "password" : "text"))
          }
          suffix={
            localType !== "password" ? (
              <EyeSlash
                variant="Bold"
                className="text-iPrimary"
                size="1.5rem"
              />
            ) : (
              <Eye variant="Bold" className="text-iPrimary" size="1.5rem" />
            )
          }
          classNames={{
            ...classNames,
            suffix: `hover:bg-primary/0.2 ${classNames?.suffix ?? ""}`,
          }}
        />
      ) : type === "search" ? (
        <BasicInput
          {...rest}
          type={"text"}
          suffixClick={() =>
            rest.value !== "" && rest.suffixClick && rest.suffixClick()
          }
          suffix={
            rest.value === "" ? (
              <SearchNormal1 size="1.5rem" className="text-iPrimary" />
            ) : (
              <CloseCircle
                variant="Bold"
                size="1.5rem"
                className="text-iPrimary hover:text-error transition"
              />
            )
          }
          classNames={{
            ...classNames,
            suffix: `hover:bg-primary/0.2 ${classNames?.suffix ?? ""}`,
          }}
        />
      ) : type === "suffix" ? (
        <BasicInput {...rest} type={"text"} classNames={classNames} />
      ) : type === "number" ?(
        <BasicInput classNames={classNames} type={"number"} {...rest} />
      ):(
        <BasicInput {...rest} type={"text"} classNames={classNames} />
      )}
    </>
  );
}

export default Input;
