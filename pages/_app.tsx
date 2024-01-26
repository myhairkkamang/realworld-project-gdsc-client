import "../stylesheets/demo.productionready.io.main.css";
import Header from "../components/header";
import type { AppProps } from "next/app";

const realWorld_Header = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Header />
      <Component {...pageProps}></Component>
    </>
  );
};

export default realWorld_Header;
