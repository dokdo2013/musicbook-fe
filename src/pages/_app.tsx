import { FC } from "react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { reduxWrapper } from "@redux";
import { Provider as ReduxProvider } from "react-redux";
import { ChakraProvider } from "@chakra-ui/react";
import { DefaultLayout } from "../components/layout/defaultLayout";
import { appWithTranslation } from "next-i18next";
import { SessionProvider } from "next-auth/react";
import { Modals } from "@components/modals";

const App: FC<AppProps> = ({ Component, ...rest }: AppProps) => {
  const { store, props } = reduxWrapper.useWrappedStore(rest);
  const { pageProps } = props;
  return (
    <ReduxProvider store={store}>
      <SessionProvider session={pageProps.session}>
        <ChakraProvider>
          <DefaultLayout>
            <Modals />
            <Component {...pageProps} />
          </DefaultLayout>
        </ChakraProvider>
      </SessionProvider>
    </ReduxProvider>
  );
};

export default appWithTranslation(App);
