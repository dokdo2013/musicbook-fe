import { GetStaticProps } from "next";
import { FC, useEffect } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { MUSICBOOK_URL_KEYS } from "@lib/constant";
import { consoleLog, getStaticPathArray, openLoginModal } from "@lib/functions";
import { CommonSideBar } from "@components/sideBar";
import { AuthedLandingArticle } from "@components/article";
import { useDispatch } from "react-redux";
import Head from "next/head";

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
  const dispatch = useDispatch();
  const { data, status } = useSession();

  const getHeadTitle = () => {
    let title = "노래책";
    switch (page) {
      case "main":
        title += " - 홈";
        break;
      case "mypage":
        title += " - 마이페이지";
        break;
      case "book":
        title += ` - ${data?.user?.name}의 노래책`;
        break;
      case "guide":
        title += " - 이용안내";
        break;
    }
    return title;
  };

  useEffect(() => {
    if ((status === "unauthenticated" && page !== "guide") || !page) {
      router.push("/");
      openLoginModal(dispatch, true);
    }
    consoleLog("auth", status, data);
  }, [data, status, router, dispatch, page]);

  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <title>{getHeadTitle()}</title>
      </Head>
      {page && <CommonSideBar page={page} />}
      {status === "authenticated" && page && page === "main" && <AuthedLandingArticle />}
    </>
  );
};

export default LadingPage;
