import { GLOBAL_PADDING_1, GLOBAL_PADDING_3 } from "@lib/constant";
import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClick?: () => void;
}

export const SideBarMenu: FC<Props> = ({ children, onClick }) => {
  return (
    <>
      <div className={`menu ${onClick ? "clickable" : ""}`} onClick={onClick}>
        {children}
      </div>
      <style jsx>{`
        .menu {
          display: block;
          --padding-1: ${GLOBAL_PADDING_1}px;
          --padding-3: ${GLOBAL_PADDING_3}px;
          position: relative;
          width: 100%;
          padding: var(--padding-3) var(--padding-1);
          border-bottom: 1px solid #eee;
          color: #666;
          font-weight: bold;
          transition: 0.2s;
        }
        .menu.clickable:hover {
          cursor: pointer;
          background-color: #eee;
          color: #242424;
        }
      `}</style>
    </>
  );
};
