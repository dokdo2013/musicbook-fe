import { FC, ReactNode } from "react";
import { useSession } from "next-auth/react";
import { useResponsive } from "@lib/hooks";
import { Header } from "@components/header";
import { Footer } from "@components/footer";
import { LoadingScreen } from "@components/loadingScreen";
import { RouterProgress } from "@components/routerProgress";
import { FOOTER_HEIGHT_PX, HEADER_HEIGHT_PX, MAX_FRAME_WIDTH_PX } from "@lib/constant";
import { QuickMenu } from "@components/quickMenu";

interface Props {
  children: ReactNode;
}

export const DefaultLayout: FC<Props> = ({ children }) => {
  const { status } = useSession();
  const { isLoading, isMobile } = useResponsive();

  return (
    <>
      <RouterProgress />
      <Header />
      <div className={`main-wrap ${isMobile && "mobile"}`}>
        <div className="content">{children}</div>
      </div>
      <QuickMenu />
      <Footer />
      <LoadingScreen isShow={isLoading || status === "loading"} />
      <style jsx>{`
        @keyframes intro {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .main-wrap {
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          width: 100%;
          height: calc(100% - ${HEADER_HEIGHT_PX}px - ${FOOTER_HEIGHT_PX}px);
          overflow: hidden;
          animation: intro 0.5s ease-in-out;

          .content {
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            max-width: ${MAX_FRAME_WIDTH_PX}px;
            height: 100%;
          }
        }
        .main-wrap.mobile {
          .sidebar {
            display: none;
          }
        }
      `}</style>
    </>
  );
};
