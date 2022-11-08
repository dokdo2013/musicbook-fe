import { GetStaticProps } from "next";
import { FC, useEffect } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useSession } from "next-auth/react";
import { consoleLog } from "@lib/functions";
import { UnauthedLadingArticle } from "@components/article";
import { CommonSideBar } from "@components/sideBar";
import Head from "next/head";

export const getStaticProps: GetStaticProps = async ({ locale, locales }: any) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      locales,
    },
  };
};

const LadingPage: FC = () => {
  const { data, status } = useSession();

  useEffect(() => {
    consoleLog("auth", status, data);
  }, [data, status]);

  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <title>노래책</title>
      </Head>
      <CommonSideBar mode="hidden" align="right" />
      <UnauthedLadingArticle />
    </>
  );
};

export default LadingPage;
