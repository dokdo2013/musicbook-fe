import { FC } from "react";
import "@src/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { reduxWrapper } from "@redux";
import { Provider as ReduxProvider } from "react-redux";
import { ChakraProvider, extendTheme, StyleFunctionProps } from "@chakra-ui/react";
import { appWithTranslation } from "next-i18next";
import { SessionProvider } from "next-auth/react";
import { DefaultLayout } from "@components/layout/defaultLayout";
import { Modals } from "@components/modals";
import { DebugComponent } from "@components/debugComponent";

const chakraUITheme = extendTheme({
  config: { initialColorMode: "light", useSystemColorMode: false },
  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        bg: props.colorMode === "light" ? "gray.100" : "gray.800",
      },
    }),
  },
});

const App: FC<AppProps> = ({ Component, ...rest }: AppProps) => {
  const { store, props } = reduxWrapper.useWrappedStore(rest);
  const { pageProps } = props;

  return (
    <ReduxProvider store={store}>
      <SessionProvider session={pageProps.session}>
        <ChakraProvider theme={chakraUITheme}>
          <DefaultLayout>
            {process.env.NODE_ENV !== "production" && <DebugComponent />}
            <Modals />
            <Component {...pageProps} />
          </DefaultLayout>
        </ChakraProvider>
      </SessionProvider>
    </ReduxProvider>
  );
};

export default appWithTranslation(App);
