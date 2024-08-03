import React from "react";
import Routes from "./Routes";
import Header from "./component/Header";
import Inventors from "./component/Inventors";
import Footer from "./component/Footer";
import { ThemeProvider } from "styled-components";
import { colors, media } from "./theme";
import GlobalStyle from "./GlobalStyle.jsx";

const theme = {
  colors,
  media,
};

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Header />
    <main role="main" className="main-content">
      <Routes />
      <Inventors />
    </main>
    <Footer />
  </ThemeProvider>
);

export default App;
