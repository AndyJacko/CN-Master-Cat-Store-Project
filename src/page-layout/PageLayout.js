import React from "react";

import Header from "./Header/Header";
import Content from "./Content/Content";
import Footer from "./Footer/Footer";

const PageLayout = ({ children }) => {
  return (
    <>
      <header>
        <Header />
      </header>

      <main>
        <Content>{children}</Content>
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default PageLayout;
