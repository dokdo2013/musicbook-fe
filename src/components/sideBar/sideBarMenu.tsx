import { useResponsive } from "@/src/lib/hooks";
import { GLOBAL_PADDING_1, GLOBAL_PADDING_2 } from "@lib/constant";
import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const SideBarMenu: FC<Props> = ({ children }) => {
  const { isMobile, isTablet } = useResponsive();

  return (
    <>
      <div className="menu">{children}</div>
      <style jsx>{`
        .menu {
          display: block;
          --padding-1: ${GLOBAL_PADDING_1}px;
          --padding-2: ${GLOBAL_PADDING_2}px;
          position: relative;
          width: 100%;
          padding: var(--padding-2) var(--padding-1);
          border-bottom: 1px solid #eee;
          transition: 0.2s;
          transform-origin: center left;
        }
      `}</style>
      <style jsx global>{`
        .sidebar-wrap.mobile {
          &.open > .menu {
            transform: scaleX(1);
            opacity: 1;
          }
          &.close > .menu {
            transform: scaleX(0.1);
            opacity: 0;
          }
        }
      `}</style>
    </>
  );
};
