import { FC, PropsWithChildren } from "preact/compat";
import "./styles.scss";

export type PageProps = PropsWithChildren;
export const Page: FC<PageProps> = ({ children }) => {
  return <div className="page">{children}</div>;
};
