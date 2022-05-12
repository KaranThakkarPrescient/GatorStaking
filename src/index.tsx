import * as React from "react";
import ReactDOM from "react-dom";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import "./index.css";
import App from "./App";
import theme from "./theme";
import { MoralisProvider } from "react-moralis";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
function onChange(value: any) {
  console.log("Captcha value:", value);
}
ReactDOM.render(
  <ThemeProvider theme={theme}>
    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
    <CssBaseline />
    <MoralisProvider
      appId="431fEvikCt3f97Ko1jdXlNFfr3Cbz4LVsOZVQcUS"
      serverUrl="https://fdtlui2godsc.usemoralis.com:2053/server"
    >
      {/* <GoogleReCaptchaProvider
        reCaptchaKey="6LdwbnceAAAAAL2Ghcki-lJGKQLBbbWw-_apnxeA"
        language="[optional_language]"
        scriptProps={{
          async: true, // optional, default to false,
          defer: false, // optional, default to false
          appendTo: "head", // optional, default to "head", can be "head" or "body",
          nonce: undefined, // optional, default undefined
          // secret 6LdwbnceAAAAACoCnXP-p4Gac7yLJJgjysMc-LLg
        }}
      > */}
      <App />
      {/* </GoogleReCaptchaProvider> */}
    </MoralisProvider>
  </ThemeProvider>,
  document.querySelector("#root")
);
