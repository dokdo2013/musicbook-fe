import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const DesktopLayouts: FC<Props> = ({ children }) => {
  return (
    <>
      <h1>is Desktop</h1>
      {children}
    </>
  );
};

export default DesktopLayouts;
