import React from "react";

import Header from "./Header/Header";
import Content from "./Content/Content";
import Footer from "./Footer/Footer";

const PageLayout = ({ children }) => {
  return (
    <div>
      <header>
        <Header />
      </header>

      <main>
        <Content>{children}</Content>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default PageLayout;
