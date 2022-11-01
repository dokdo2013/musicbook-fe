import { useResponsive } from "@/src/lib/hooks";
import { FC, ReactNode, useState } from "react";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";

interface Props {
  children: ReactNode;
}

export const SideBar: FC<Props> = ({ children }) => {
  const { isMobile, isTablet } = useResponsive();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <div
        className={`sidebar-wrap ${(isMobile || isTablet) && "mobile"} ${
          (isMobile || isTablet) && (sidebarOpen ? "open" : "close")
        }`}
      >
        {children}
        {(isMobile || isTablet) && (
          <div className="sidebar-toggle-btn" onClick={() => setSidebarOpen(!sidebarOpen)}>
            <Icon icon={sidebarOpen ? faAngleLeft : faAngleRight} height={30} />
          </div>
        )}
      </div>
      <style jsx>{`
        .sidebar-wrap {
          position: relative;
          display: block;
          width: 350px;
          height: 100%;
          border-right: 1px solid #e2e8f0;
          background-color: #fff;
          z-index: 10;

          .sidebar-toggle-btn {
            position: absolute;
            display: flex;
            justify-content: center;
            align-items: center;
            top: 70px;
            right: 0;
            transform: translateX(100%);
            width: 50px;
            height: 50px;
            background-color: white;
            border: 1px solid #eee;
            border-radius: 0 20px 20px 0;
            opacity: 0.5;
            transition: 0.2s;
            font-size: 30px;

            &:hover {
              cursor: pointer;
              opacity: 0.9;
            }
          }
        }
        .sidebar-wrap.mobile {
          transition: 0.4s;

          &.open {
            width: 350px;
          }
          &.close {
            width: 10px;
          }
        }
      `}</style>
    </>
  );
};
