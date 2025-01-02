import { FC } from "preact/compat";
import "./styles.scss";
import LogoSVG from "shared/assets/logo.svg?react";
import clsx from "clsx";
export type LogoProps = React.JSX.IntrinsicSVGElements["svg"];
export const Logo: FC<LogoProps> = ({ className, ...props }) => {
  return <LogoSVG className={clsx("logo", className)} {...props} />;
};
