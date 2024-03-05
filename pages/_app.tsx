import "../stylesheets/demo.productionready.io.main.css";
import Header from "../components/header/header";
import type { AppProps } from "next/app";
import Footer from "@/components/footer/footer";
import React, {
  useState,
  createContext,
  Dispatch,
  SetStateAction,
} from "react";
import AuthProvider, { AuthContext } from "@/context/auth.context";

const Layout = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <AuthProvider>
        <Header />
        <Component {...pageProps}></Component>
        <Footer />
      </AuthProvider>
    </>
  );
};

export default Layout;
