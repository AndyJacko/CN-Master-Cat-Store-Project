import React from "react";

import Header from "./Header/Header";
import Content from "./Content/Content";
import Footer from "./Footer/Footer";

const PageLayout = ({ children }) => {
  const onCloseBasket = () => {
    document.getElementById("overlay").classList.add("hide");
    document.getElementById("sidebar").classList.remove("open");
  };

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

      <div id="overlay" className="overlay hide" onClick={onCloseBasket}></div>
      <div id="sidebar" className="sidebar">
        <div className="closebtn" onClick={onCloseBasket}>
          X
        </div>
        <p>Shopping Basket</p>
      </div>
    </>
  );
};

export default PageLayout;
