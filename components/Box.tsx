import { FC, ReactNode } from "react";

interface BoxProps {
  children: ReactNode;
}

export const Box: FC<BoxProps> = ({ children }) => {
  return <div className="box">{children}</div>;
};
