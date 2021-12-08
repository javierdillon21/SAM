import "../css/index.css";
import type { AppProps } from "next/app";
import React from "react";
import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default withAuthenticator(MyApp);
