import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const SideBarFooter: FC<Props> = ({ children }) => {
  return (
    <>
      <div className="sidebar-footer">{children}</div>
      <style jsx>{`
        .sidebar-footer {
          position: absolute;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 10px;
          bottom: 0;
          left: 0;
          width: 100%;
          height: max-content;
        }
      `}</style>
    </>
  );
};
