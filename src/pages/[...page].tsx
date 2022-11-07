import { GetStaticProps } from "next";
import { FC, useEffect } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useSession } from "next-auth/react";
import { AuthedLandingPage } from "@components/authedLandingPage";
import { consoleLog } from "../lib/functions";
import { useRouter } from "next/router";

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

  useEffect(() => {
    if (status === "unauthenticated") router.push("/");
    consoleLog("auth", status, data);
  }, [data, status]);

  return (
    <>
      {status === "authenticated" && pageParams && pageParams[0] === "main" && (
        <AuthedLandingPage />
      )}
    </>
  );
};

export default LadingPage;
