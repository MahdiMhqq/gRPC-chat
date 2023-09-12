import React, { ElementType, HTMLAttributes } from "react";

import CircleSpinner from "components/CircleSpinner";

import { buttonStyles } from "./services";

import type { BasicButtonProps } from "..";

export interface IMyButtonProps
  extends Omit<HTMLAttributes<HTMLOrSVGElement>, "type">,
    Omit<BasicButtonProps, "onClick"> {
  as?: ElementType;
}

const MyButton = React.forwardRef(
  (
    {
      children,
      disable = false,
      loading = false,
      size = "lg",
      kind = "primary",
      className = "",
      as: Tag = "button",
      ...rest
    }: IMyButtonProps,
    ref
  ) => {
    //VARIABLES
    const { sizeStyle, typeStyle } = buttonStyles({ size, kind, disable });

    return (
      <Tag
        className={`flex items-center justify-center text-button relative rounded-lg transition duration-300 ${sizeStyle} ${typeStyle} ${className}`}
        disabled={disable}
        {...rest}
        ref={ref}
        data-cy="my-button"
      >
        {loading && (
          <span className="flex items-center justify-center h-6 w-6 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
            <CircleSpinner
              innerSpinnerClass={
                kind === "primary" ? `!border-t-tSecondary` : undefined
              }
            />
          </span>
        )}
        <span
          className={loading ? "opacity-0 invisible" : "opacity-100"}
          data-cy="my-button-inner"
        >
          {children}
        </span>
      </Tag>
    );
  }
);

MyButton.displayName = "MyButton";

export default MyButton;
