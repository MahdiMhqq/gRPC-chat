import { IMyButtonProps } from "..";

interface IButtonStyles
  extends Required<Pick<IMyButtonProps, "size" | "kind" | "disable">> {}

export const buttonStyles = (props: IButtonStyles) => {
  const { size, kind, disable } = props;
  return {
    sizeStyle: sizeStyles[size],
    typeStyle:
      typeStyles[kind] +
      " " +
      (disable &&
        (kind !== "border" ? disableStyles.ord : disableStyles.border)),
  };
};

const sizeStyles: Record<IButtonStyles["size"], string> = {
  sm: "py-0 px-4 text-h5-medium",
  md: "py-1 px-4 text-h5-medium",
  lg: "py-2 px-4 text-h4-medium",
  xl: "py-3 px-4 text-h4-medium",
};

const typeStyles: Record<IButtonStyles["kind"], string> = {
  primary: "bg-primary text-tSecondary active:bg-dprimary",
  border:
    "bg-transparent border-2 border-primary text-primary hover:bg-primary20 active:bg-primary20",
};

const disableStyles = {
  ord: "cursor-not-allowed bg-sDisabled text-iDisabled active:bg-tDisabled",
  border:
    "bg-transparent !border-iDisabled !text-iDisabled hover:bg-iDisabled hover:border-transparent active:bg-tDisabled cursor-not-allowed",
};
