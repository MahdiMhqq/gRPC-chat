import React, { ReactNode, useId } from "react";
// import { InfoCircle } from "iconsax-react";
import clsx from "clsx";

export interface IBasicInputProps
  extends Omit<
    React.DetailedHTMLProps<
      React.InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    >,
    "className" | "suffix" | "prefix"
  > {
  label?: string;
  error?: string | boolean;
  prefix?: ReactNode;
  suffix?: ReactNode;
  suffixClick?: () => void;
  prefixClick?: () => void;
  disable?: boolean;
  type?: string;
  classNames?: {
    wrapper?: string;
    label?: string;
    input?: string;
    suffix?: string;
    prefix?: string;
  };
}

function BasicInput({
  label,
  error,
  prefix,
  suffix,
  suffixClick,
  prefixClick,
  disable,
  type,
  classNames,
  ...rest
}: IBasicInputProps) {
  //CONSTANTS
  const inputIdGenerated = "input" + useId();
  const inputId = rest?.id ?? inputIdGenerated;

  return (
    <div className={classNames?.wrapper} data-cy="my-input">
      {label && (
        <label
          htmlFor={inputId}
          className={clsx([
            "text-tPrimary text-button mb-2 select-none inline-block",
            classNames?.label,
          ])}
          data-cy="my-input-label"
        >
          {label}
        </label>
      )}
      <div className={`relative w-full`}>
        {disable && (
          <div className="absolute inset-0 z-[2] cursor-not-allowed"></div>
        )}
        {prefix && (
          <div
            className={clsx([
              "absolute top-1/2 -translate-y-1/2 start-4 transition duration-300 w-7 h-7 p-0.5 rounded-md z-[1] cursor-pointer",
              classNames?.prefix,
            ])}
            onClick={prefixClick}
            data-cy="my-input-prefix"
          >
            {prefix}
          </div>
        )}
        <input
          {...rest}
          id={inputId}
          className={clsx([
            "w-full rounded-lg text-tPrimary bg-sPrimary p-4 text-button-medium placeholder:text-par-medium placeholder:text-tDisabled border-none !outline-0 focus:shadow-inputFocus caret-primary transition duration-300",
            disable && "text-tDisabled bg-sDisabled",
            prefix && "ps-16",
            error &&
              "!text-error !caret-error !shadow-inputError focus:!shadow-inputErrorFocus",
            classNames?.input,
          ])}
          type={type}
          data-cy="my-input-main"
        />
        {suffix && (
          <div
            className={clsx([
              "absolute top-1/2 -translate-y-1/2 end-4 transition duration-300 p-0.5 rounded-md z-[3] cursor-pointer",
              classNames?.suffix,
            ])}
            onClick={suffixClick}
            data-cy="my-input-suffix"
          >
            {suffix}
          </div>
        )}
      </div>
      {/* {error && typeof error === "string" && (
        <p className="flex gap-1 mt-1 text-error" data-cy="my-input-error">
          <span className="flex items-center">
            <InfoCircle size="1rem" className="text-error" />
          </span>
          {error}
        </p>
      )} */}
    </div>
  );
}

export default BasicInput;
