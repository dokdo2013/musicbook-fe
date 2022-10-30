import { GetStaticProps } from "next";
import { FC, useEffect } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useSession } from "next-auth/react";
import { UnauthedLadingPage } from "@components/unauthedLandingPage";
import { AuthedLandingPage } from "@components/authedLandingPage";

export const getStaticProps: GetStaticProps = async ({ locale, locales }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
    locales,
  },
});

const LadingPage: FC = () => {
  const { data, status } = useSession();

  useEffect(() => {
    console.log("auth", status, data);
  }, [data, status]);

  return (
    <>
      {status === "unauthenticated" || status === "loading" ? (
        <UnauthedLadingPage />
      ) : (
        <AuthedLandingPage />
      )}
    </>
  );
};

export default LadingPage;
