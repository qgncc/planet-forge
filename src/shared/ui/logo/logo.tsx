import { FC } from "preact/compat";
import "./styles.scss";
import LogoSVG from "shared/assets/logo.svg?react";
export type LogoProps = unknown;
export const Logo: FC<LogoProps> = () => {
  return <LogoSVG />;
};
