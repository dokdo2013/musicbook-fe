import { GetStaticProps } from "next";
import { FC, useEffect } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useSession } from "next-auth/react";
import { AuthedLandingArticle } from "@/src/components/authedLandingArticle";
import { consoleLog } from "../lib/functions";
import { useRouter } from "next/router";
import { FOOTER_HEIGHT_PX, HEADER_HEIGHT_PX, MAX_FRAME_WIDTH_PX } from "../lib/constant";
import { CommonSideBar } from "../components/sideBar";
import { useResponsive } from "../lib/hooks";

export const getStaticProps: GetStaticProps = async ({ locale, locales, params }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
    locales,
    pageParams: params.page,
  },
});

export async function getStaticPaths() {
  return {
    paths: ["/main"],
    fallback: false,
  };
}

interface Props {
  pageParams: string[] | undefined;
}

const LadingPage: FC<Props> = ({ pageParams }) => {
  const router = useRouter();
  const { data, status } = useSession();
  const { isMobile } = useResponsive();

  useEffect(() => {
    if (status === "unauthenticated") router.push("/");
    consoleLog("auth", status, data);
  }, [data, status]);

  return (
    <>
      <div className={`main-wrap ${isMobile && "mobile"}`}>
        <div className="content">
          {pageParams && <CommonSideBar />}
          {status === "authenticated" && pageParams && pageParams[0] === "main" && (
            <AuthedLandingArticle />
          )}
        </div>
      </div>
      <style jsx>{`
        .main-wrap {
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          width: 100%;
          height: calc(100% - ${HEADER_HEIGHT_PX}px - ${FOOTER_HEIGHT_PX}px);
          overflow: hidden;

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

export default LadingPage;
