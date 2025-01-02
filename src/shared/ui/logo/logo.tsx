import { FC } from "preact/compat";
import "./styles.scss";
import LogoSVG from "shared/assets/logo.svg?react";
export type LogoProps = React.JSX.IntrinsicSVGElements["svg"];
export const Logo: FC<LogoProps> = (props) => {
  return <LogoSVG {...props} />;
};
