import { FC } from "preact/compat";
import "./style.scss";
import clsx from "clsx";
export type ButtonProps = React.JSX.IntrinsicElements["button"];
export const Button: FC<ButtonProps> = ({ className, children, ...props }) => {
  return (
    <button className={clsx("button", className)} {...props}>
      {children}
    </button>
  );
};
