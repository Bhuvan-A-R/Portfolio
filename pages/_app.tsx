import "../index.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Bhuvan A R</title>
          <link rel="icon" href="/favicon.svg" />
          <link rel="apple-touch-icon" href="/favicon.svg" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
