import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";

type ComponentWithPageLayout = AppProps & {
  Component: AppProps["Component"] & {
    PageLayout?: any;
  };
};

export default function App({ Component, pageProps }: ComponentWithPageLayout) {
  return (
    <ChakraProvider>
      {Component.PageLayout ? (
        <Component.PageLayout>
          <Component {...pageProps} />
        </Component.PageLayout>
      ) : (
        <Component {...pageProps} />
      )}
    </ChakraProvider>
  );
}
