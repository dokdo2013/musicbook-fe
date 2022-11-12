import { FC, ReactNode, useEffect, useState } from "react";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleLeft, IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  useArticleBlockBgColorModeValue,
  useArticleBlockBorderColorModeValue,
  useResponsive,
  useTealColorModeValue,
} from "@lib/hooks";
import { ReduxStates } from "@redux/modules";
import { setSideBarOpen } from "@redux/modules/common";
import { Box, Flex, useColorMode, useColorModeValue } from "@chakra-ui/react";

interface Props {
  children: ReactNode;
  align?: "left" | "right";
  mode?: "fixed" | "semi" | "hidden";
  openIcon?: IconDefinition;
  closeIcon?: IconDefinition;
}

export const SideBar: FC<Props> = ({ children, align = "left", mode, openIcon, closeIcon }) => {
  const dispatch = useDispatch();
  const sideBarOpen = useSelector(({ common }: ReduxStates) => common.sideBarOpen);
  const { isMobile, isTablet } = useResponsive();
  const [open, setOpen] = useState(sideBarOpen);
  const [sideBarMode, setSideBarMode] = useState<"mobile" | "tablet" | "default">("default");
  const [sideBarPosition, setSideBarPosition] = useState<"relative" | "absolute">("relative");
  const [sideBarTop, setSideBarTop] = useState("auto");
  const [sideBarLeft, setSideBarLeft] = useState("auto");
  const [sideBarRight, setSideBarRight] = useState("auto");
  const bgColor = useArticleBlockBgColorModeValue();
  const borderColor = useArticleBlockBorderColorModeValue();
  const tealColor = useTealColorModeValue();

  const getToggleIcon = () => {
    if (open) {
      if (align === "left") return closeIcon ? closeIcon : faAngleLeft;
      else return closeIcon ? closeIcon : faAngleRight;
    } else {
      if (align === "left") return openIcon ? openIcon : faAngleRight;
      else return openIcon ? openIcon : faAngleLeft;
    }
  };

  useEffect(() => {
    setSideBarMode(
      (isMobile && !mode) || mode === "hidden"
        ? "mobile"
        : (isTablet && !mode) || mode === "semi"
        ? "tablet"
        : "default",
    );
  }, [isMobile, isTablet, mode]);

  useEffect(() => {
    if (sideBarMode === "default") {
      setSideBarPosition("relative");
      setSideBarTop("auto");
      setSideBarLeft("auto");
      setSideBarRight("auto");
    } else {
      setSideBarPosition("absolute");
      setSideBarTop("0");
      setSideBarLeft(align === "left" ? "0" : "auto");
      setSideBarRight(align === "right" ? "0" : "auto");
    }
  }, [sideBarMode, align]);

  useEffect(() => {
    setOpen(sideBarOpen);
  }, [sideBarOpen]);

  return (
    <>
      {(isMobile || isTablet) && open && (
        <div className="sidebar-screen-saver" onClick={() => dispatch(setSideBarOpen(false))}></div>
      )}
      <Box
        position={sideBarPosition}
        top={sideBarTop}
        left={sideBarLeft}
        right={sideBarRight}
        display="block"
        width="350px"
        maxWidth="80%"
        height="100%"
        p="20px 0"
        zIndex="10"
        bg={bgColor}
        borderLeft="1px"
        borderRight="1px"
        borderColor={borderColor}
        transition="0.4s"
        transformOrigin={`center ${align}`}
        transform={
          open
            ? "translateX(0)"
            : sideBarMode === "tablet"
            ? `translateX(${align === "left" ? "calc(-100% + 10px)" : "calc(100% - 10px)"})`
            : sideBarMode === "mobile"
            ? `translateX(${align === "left" ? "-100%" : "100%"})`
            : "none"
        }
      >
        <Box position="relative" w="full" height="100%" overflowY="auto" pb="60px">
          {children}
        </Box>
        {((isTablet && !mode) || mode === "semi") && (
          <Flex
            justifyContent="center"
            alignItems="center"
            top="70px"
            left={align === "left" ? "auto" : "0px"}
            right={align === "right" ? "auto" : "0px"}
            position="absolute"
            width="50px"
            height="50px"
            bg={bgColor}
            border="1px"
            borderRadius={align === "left" ? "0 20px 20px 0" : "20px 0 0 20px"}
            borderColor={borderColor}
            opacity="0.8"
            transition="0.2s"
            transform={`translateX(${align === "left" ? `100%` : `-100%`})`}
            fontSize="25px"
            className="sidebar-toggle-btn"
            onClick={() => dispatch(setSideBarOpen(!open))}
          >
            <Icon icon={getToggleIcon()} height={25} color={tealColor} />
          </Flex>
        )}
      </Box>
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
      `}</style>
    </>
  );
};
