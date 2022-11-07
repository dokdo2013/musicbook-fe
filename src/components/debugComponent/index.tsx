import { useResponsive } from "@lib/hooks";
import { FC, useEffect, useState } from "react";

export const DebugComponent: FC = () => {
  const { isLoading, isPC, isTablet, isMobile } = useResponsive();
  const [responsiveStatus, setResponsiveStatus] = useState<string>();

  useEffect(() => {
    if (isLoading) setResponsiveStatus("loading");
    else if (isPC) setResponsiveStatus("pc");
    else if (isTablet) setResponsiveStatus("tablet");
    else if (isMobile) setResponsiveStatus("mobile");
    else setResponsiveStatus("init");
  }, [isLoading, isPC, isTablet, isMobile]);

  return (
    <>
      <div className="debug-wrap">
        <div>responsive: {responsiveStatus}</div>
      </div>
      <style jsx>{`
        .debug-wrap {
          display: block;
          position: fixed;
          top: 0;
          right: 0;
          width: 100px;
          height: 30px;
          background-color: rgba(0, 0, 0, 0.3);
          z-index: 99999999;
          font-size: 10px;
        }
      `}</style>
    </>
  );
};
