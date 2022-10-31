import { GLOBAL_PADDING_1, GLOBAL_PADDING_2 } from "@lib/constant";
import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const SideBarMenu: FC<Props> = ({ children }) => {
  return (
    <>
      <div className="menu">{children}</div>
      <style jsx>{`
        .menu {
          --padding-1: ${GLOBAL_PADDING_1}px;
          --padding-2: ${GLOBAL_PADDING_2}px;
          position: relative;
          width: 100%;
          padding: var(--padding-2) var(--padding-1);
          border-bottom: 1px solid #eee;
        }
      `}</style>
    </>
  );
};
