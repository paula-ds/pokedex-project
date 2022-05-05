import "../styles/globals.css";
import "../styles/pokedex.css";
import type { AppProps } from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Proyecto Examedi</title>
        <meta name="description" content="Pokemon app para Examedi" />
        <link rel="icon" href="https://assets.pokemon.com/static2/_ui/img/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
