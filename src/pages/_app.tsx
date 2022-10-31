import { FC } from "react";
import "@src/styles/globals.css";
import type { AppProps } from "next/app";
import { reduxWrapper } from "@redux";
import { Provider as ReduxProvider } from "react-redux";
import { ChakraProvider } from "@chakra-ui/react";
import { DefaultLayout } from "@components/layout/defaultLayout";
import { appWithTranslation } from "next-i18next";
import { SessionProvider } from "next-auth/react";
import { Modals } from "@components/modals";
import { LoadingScreen } from "@components/loadingScreen";
import { useResponsive } from "@lib/hooks";
import Head from "next/head";

const App: FC<AppProps> = ({ Component, ...rest }: AppProps) => {
  const { store, props } = reduxWrapper.useWrappedStore(rest);
  const { pageProps } = props;
  const { isMobile, isLoading } = useResponsive();

  return (
    <ReduxProvider store={store}>
      <SessionProvider session={pageProps.session}>
        <ChakraProvider>
          <DefaultLayout>
            <Head>
              <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
              <title>노래책</title>
            </Head>
            <LoadingScreen isShow={isLoading} />
            <Modals />
            <Component {...pageProps} />
          </DefaultLayout>
        </ChakraProvider>
      </SessionProvider>
    </ReduxProvider>
  );
};

export default appWithTranslation(App);
