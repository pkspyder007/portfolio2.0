import * as React from "react";
import { ChakraProvider } from "@chakra-ui/core";

import '../styles/globals.css'
import Navbar from "../components/Navbar";
import Footer from "../sections/Footer";

// const colors = {
//   brand: {
//     900: "#1a365d",
//     800: "#153e75",
//     700: "#2a69ac",
//   },
// }

// const customTheme = extendTheme({ colors })

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Navbar />
       <Component {...pageProps} />
       <Footer />
    </ChakraProvider>
  )
}

export default MyApp
