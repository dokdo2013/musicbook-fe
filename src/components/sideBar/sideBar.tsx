import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const SideBar: FC<Props> = ({ children }) => {
  return (
    <>
      <div className="sidebar-wrap">{children}</div>
      <style jsx>{`
        .sidebar-wrap {
          position: relative;
          display: block;
          width: 350px;
          height: 100%;
          border-right: 1px solid #e2e8f0;
          background-color: #fff;
        }
      `}</style>
    </>
  );
};
