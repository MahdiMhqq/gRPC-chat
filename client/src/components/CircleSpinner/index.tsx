import styles from "./styles/CircleSpinner.module.scss";

interface CircleSpinnerProps {
  /** CustomClass for customized style classes, this prop applies to parent */
  className?: string;
  /** InnerCustomClass for customized style classes, this prop applies to each of inner spinner elements.
   ** Mainly used for change color of spinner. for this purpose change border top color, in tailwind we can use border-t-[color] class */
  innerSpinnerClass?: string;
}

/** Loading Spinner with styles like google spinner */
function CircleSpinner({ className, innerSpinnerClass }: CircleSpinnerProps) {
  return (
    <div
      className={`${
        styles.loadingRing
      } inline-block relative w-6 aspect-square z-10 ${className ?? ""}`}
      data-cy="my-spinner"
    >
      <div
        className={`block absolute w-4/5 h-4/5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-4 border-transparent border-t-primary rounded-full ${
          innerSpinnerClass ?? ""
        }`}
      ></div>
      <div
        className={`block absolute w-4/5 h-4/5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-4 border-transparent border-t-primary rounded-full ${
          innerSpinnerClass ?? ""
        }`}
      ></div>
      <div
        className={`block absolute w-4/5 h-4/5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-4 border-transparent border-t-primary rounded-full ${
          innerSpinnerClass ?? ""
        }`}
      ></div>
    </div>
  );
}

export default CircleSpinner;
