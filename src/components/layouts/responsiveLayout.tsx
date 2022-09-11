import { FC, ReactNode } from "react";
import { useIsMobile } from "@Hooks/useIsMobile";
import DesktopLayouts from "./desktopLayout";
import MobileLayouts from "./mobileLayout";

interface Props {
  children: ReactNode;
}

const ResponsiveLayout: FC<Props> = ({ children }) => {
  const isMobile = useIsMobile();

  return (
    <>
      {isMobile ? (
        <MobileLayouts>{children}</MobileLayouts>
      ) : (
        <DesktopLayouts>{children}</DesktopLayouts>
      )}
    </>
  );
};

export default ResponsiveLayout;
