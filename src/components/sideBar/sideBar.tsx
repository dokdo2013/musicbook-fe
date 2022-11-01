import { useResponsive } from "@/src/lib/hooks";
import { FC, ReactNode, useEffect, useState } from "react";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { ReduxStates } from "@redux/modules";
import { setSideBarOpen } from "@/src/redux/modules/common";

interface Props {
  children: ReactNode;
  align?: "left" | "right";
  mode?: "fixed" | "semi" | "hidden";
}

export const SideBar: FC<Props> = ({ children, align = "left", mode }) => {
  const dispatch = useDispatch();
  const sideBarOpen = useSelector(({ common }: ReduxStates) => common.sideBarOpen);
  const { isMobile, isTablet } = useResponsive();
  const [open, setOpen] = useState(sideBarOpen);

  const getToggleIcon = () => {
    if (open) {
      if (align === "left") return faAngleLeft;
      else return faAngleRight;
    } else {
      if (align === "left") return faAngleRight;
      else return faAngleLeft;
    }
  };

  useEffect(() => {
    setOpen(sideBarOpen);
  }, [sideBarOpen]);

  return (
    <>
      {(isMobile || isTablet) && open && (
        <div className="sidebar-screen-saver" onClick={() => dispatch(setSideBarOpen(false))}></div>
      )}
      <div
        className={`sidebar-wrap ${((isMobile && !mode) || mode === "hidden") && "mobile"} ${
          ((isTablet && !mode) || mode === "semi") && "tablet"
        } ${(isMobile || isTablet || (mode && mode !== "fixed")) && (open ? "open" : "close")}`}
      >
        <div className="content">{children}</div>
        {isTablet && (
          <div className="sidebar-toggle-btn" onClick={() => dispatch(setSideBarOpen(!open))}>
            <Icon icon={getToggleIcon()} height={30} />
          </div>
        )}
      </div>
      <style jsx>{`
        @keyframes screenSaverIntro {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .sidebar-screen-saver {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5);
          z-index: 9;
          animation: screenSaverIntro 0.4s ease-in-out;
        }
        .sidebar-wrap {
          position: relative;
          display: block;
          width: 350px;
          max-width: 80%;
          height: 100%;
          padding: 20px 0;
          border-right: 1px solid #e2e8f0;
          border-left: 1px solid #e2e8f0;
          background-color: #fff;
          z-index: 10;
          transform-origin: center ${align};

          .content {
            position: relative;
            width: 100%;
            height: 100%;
            overflow-y: scroll;
          }

          .sidebar-toggle-btn {
            position: absolute;
            display: flex;
            justify-content: center;
            align-items: center;
            top: 70px;
            ${align === "left" ? `right: 0;` : `left: 0;`}
            transform: translateX(${align === "left" ? `100%` : `-100%`});
            width: 50px;
            height: 50px;
            background-color: white;
            border: 1px solid #eee;
            ${align === "left" ? `border-radius: 0 20px 20px 0;` : `border-radius: 20px 0 0 20px;`}
            opacity: 0.5;
            transition: 0.2s;
            font-size: 30px;

            &:hover {
              cursor: pointer;
              opacity: 0.9;
            }
          }
        }
        .sidebar-wrap.tablet,
        .sidebar-wrap.mobile {
          position: absolute;
          top: 0;
          ${`${align}: 0;`}
          transition: 0.4s;

          &.open {
            transform: translateX(0);
          }
          &.tablet.close {
            transform: translateX(${align === "left" ? "calc(-100% + 10px)" : "calc(100% - 10px)"});
          }
          &.mobile.close {
            transform: translateX(${align === "left" ? "-100%" : "100%"});
          }
        }
      `}</style>
    </>
  );
};
