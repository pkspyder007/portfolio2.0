import * as React from "react";
import { ChakraProvider, extendTheme } from "@chakra-ui/core";

import '../styles/globals.css'
import Navbar from "../components/Navbar";
import Footer from "../sections/Footer";
import { RainbowWaves } from "../components/Waves";

const theme = extendTheme({
  styles: {
    global: {
      "html, body, h1": {
        fontFamily: "Play"
      },
      "paragraph, *" : {
        fontFamily: "Montserrat"
      }
    },
  },
})

function MyApp({ Component, pageProps }) {
  return (
    <>
      <RainbowWaves />
    <ChakraProvider theme={theme}>
      <Navbar />
       <Component {...pageProps} />
       <Footer />
    </ChakraProvider>
    </>
  )
}

export default MyApp
