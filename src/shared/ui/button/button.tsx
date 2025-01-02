import { FC } from "preact/compat";
import "./style.scss";
import clsx from "clsx";

type ButtonSize = "xs" | "sm" | "md" | "lg" | "xl" | "full";

export type ButtonProps = React.JSX.IntrinsicElements["button"] & {
  size?: ButtonSize;
};

export const Button: FC<ButtonProps> = ({
  className,
  children,
  size = "md", // default size
  ...props
}) => {
  return (
    <button className={clsx("button", `button--${size}`, className)} {...props}>
      {children}
    </button>
  );
};
