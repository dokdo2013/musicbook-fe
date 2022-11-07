import { GetStaticProps } from "next";
import { FC, useEffect } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useSession } from "next-auth/react";
import { UnauthedLadingPage } from "@components/unauthedLandingPage";
import { consoleLog } from "../lib/functions";
import { useRouter } from "next/router";

export const getStaticProps: GetStaticProps = async ({ locale, locales }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
    locales,
  },
});

const LadingPage: FC = () => {
  const router = useRouter();
  const { data, status } = useSession();

  useEffect(() => {
    if (status === "authenticated") router.push("/main");
    consoleLog("auth", status, data);
  }, [data, status]);

  return <>{status === "unauthenticated" && <UnauthedLadingPage />}</>;
};

export default LadingPage;
