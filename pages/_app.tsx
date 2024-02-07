import "../stylesheets/demo.productionready.io.main.css";
import Header from "../components/header/header";
import type { AppProps } from "next/app";
import Footer from "@/components/footer/footer";

const default_Layout = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Header />
      <Component {...pageProps}></Component>
      <Footer />
    </>
  );
};

export default default_Layout;
