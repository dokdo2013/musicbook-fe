import { GetStaticProps } from "next";
import { FC, useEffect } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import {
  FOOTER_HEIGHT_PX,
  HEADER_HEIGHT_PX,
  MAX_FRAME_WIDTH_PX,
  MUSICBOOK_URL_KEYS,
} from "@lib/constant";
import { useResponsive } from "@lib/hooks";
import { consoleLog, getStaticPathArray } from "@lib/functions";
import { CommonSideBar } from "@components/sideBar";
import { AuthedLandingArticle } from "@components/authedLandingArticle";

export const getStaticProps: GetStaticProps = async ({ locale, locales, params }: any) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      locales,
      page: params.page[0] || null,
      pageParam: params.page[1] || null,
    },
  };
};

export async function getStaticPaths() {
  const paths = [...getStaticPathArray()];
  return {
    paths,
    fallback: false,
  };
}

interface Props {
  page: MUSICBOOK_URL_KEYS | null;
  pageParam: string | null;
}

const LadingPage: FC<Props> = ({ page, pageParam }) => {
  const router = useRouter();
  const { data, status } = useSession();
  const { isMobile } = useResponsive();

  useEffect(() => {
    if (status === "unauthenticated") router.push("/");
    consoleLog("auth", status, data);
  }, [data, status, router]);

  return (
    <>
      <div className={`main-wrap ${isMobile && "mobile"}`}>
        <div className="content">
          {page && <CommonSideBar page={page} />}
          {status === "authenticated" && page && page === "main" && <AuthedLandingArticle />}
        </div>
      </div>
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

export default LadingPage;
