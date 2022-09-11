import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const MobileLayouts: FC<Props> = ({ children }) => {
  return (
    <>
      <h1>is Mobile</h1>
      {children}
    </>
  );
};

export default MobileLayouts;
