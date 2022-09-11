import "../styles/globals.css";
import App, { AppContext, AppProps } from "next/app";
import { Provider as ReduxProvider } from "react-redux";
import configureStore from "@Redux/configureStore";
import { appWithTranslation } from "next-i18next";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";

const store = configureStore();

const chakraTheme = extendTheme();

const NextjsApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ReduxProvider store={store}>
      <ChakraProvider theme={chakraTheme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </ReduxProvider>
  );
};

NextjsApp.getInitialProps = async (appContext: AppContext) => {
  const appProps = await App.getInitialProps(appContext);

  return { ...appProps };
};

export default appWithTranslation(NextjsApp);
