import { ChakraProvider, Stack } from "@chakra-ui/react";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Stack as="main">
        <Component {...pageProps} />
      </Stack>
    </ChakraProvider>
  );
}
