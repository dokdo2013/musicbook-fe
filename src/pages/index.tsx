import type { GetServerSidePropsContext, NextPage } from "next";
import ResponsiveLayout from "@Layouts/responsiveLayout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Home: NextPage = () => {
  return (
    <ResponsiveLayout>
      <></>
    </ResponsiveLayout>
  );
};

export const getStaticProps = async ({ locale }: GetServerSidePropsContext) => {
  if (locale)
    return {
      props: {
        ...(await serverSideTranslations(locale, ["common"])),
      },
    };
  else throw Error("undefined locale");
};

export default Home;
