import React from "react";
import clsx from "clsx";

import CircleSpinner from "components/CircleSpinner";

import { buttonStyles } from "./services";

export interface IBasicButtonProps
  extends Omit<
    React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    "className"
  > {
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  variant?: "primary" | "border";
  loading?: boolean;
}

const BasicButton = React.forwardRef<HTMLButtonElement, IBasicButtonProps>(
  (
    {
      children,
      disabled = false,
      loading = false,
      size = "lg",
      variant = "primary",
      className = "",
      ...rest
    },
    ref
  ) => {
    //VARIABLES
    const { sizeStyle, variantStyle } = buttonStyles({
      size,
      variant,
      disabled,
    });

    return (
      <button
        className={clsx(
          "flex items-center justify-center text-button relative rounded-lg transition duration-300",
          sizeStyle,
          variantStyle,
          className
        )}
        ref={ref}
        {...rest}
        data-cy="my-button"
      >
        {loading && (
          <span className="absolute flex items-center justify-center w-6 h-6 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
            <CircleSpinner
              innerSpinnerClass={
                variant === "primary" ? `!border-t-tSecondary` : undefined
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
      </button>
    );
  }
);

BasicButton.displayName = "BasicButton";

export default BasicButton;
