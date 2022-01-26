import "../styles/globals.css";
import "../utils/fontAwesome.ts";
import type { AppProps } from "next/app";
import React from "react";
import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
import Menu from "../components/menu";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="flex flex-row w-screen h-screen bg-gray-100">
      <Menu />
      <Component {...pageProps} />
    </div>
  );
}

export default withAuthenticator(MyApp);
