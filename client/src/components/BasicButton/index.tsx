import { ReactNode } from "react";

import MyButton from "./ButtonStyle";

export interface BasicButtonProps {
  /** Indicating the size of Button */
  size?: "sm" | "md" | "lg" | "xl";
  /** For customizable purposes */
  className?: string;
  /** Button Type */
  type?: string;
  /** Button Variant */
  kind?: "primary" | "border";
  /** Button inner elements to be rendered */
  children?: ReactNode;
  /** Function That Calls when button clicked */
  onClick?: () => void;
  /** Disable the button whenever needed */
  disable?: boolean;
  /** Indicated if the button is a Link or Button */
  isLink?: boolean;
  /** Href of Link Button */
  linkHref?: string;
  /** Sometimes there is need to show a loading spinner inside of button */
  loading?: boolean;
}

/** BasicButton of all project */
function BasicButton({
  size = "xl",
  className,
  kind = "primary",
  type,
  children,
  onClick,
  disable,
  loading = false,
}: BasicButtonProps) {
  return (
    <MyButton
      as={"button"}
      size={size}
      kind={kind}
      className={className}
      disable={disable}
      loading={loading}
      onClick={onClick}
      type={type}
    >
      {children}
    </MyButton>
  );
}

export default BasicButton;
