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

  useEffect(() => {
    if ((status === "unauthenticated" && page !== "guide") || !page) {
      router.push("/");
      openLoginModal(dispatch, true);
    }
    consoleLog("auth", status, data);
  }, [data, status, router]);

  return (
    <>
      {page && <CommonSideBar page={page} />}
      {status === "authenticated" && page && page === "main" && <AuthedLandingArticle />}
    </>
  );
};

export default LadingPage;
