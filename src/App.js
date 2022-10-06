import React, { useState } from "react";
import { Navigate, Routes, Route } from "react-router-dom";

import PageLayout from "./page-layout/PageLayout";
import HomePage from "./pages/HomePage";
import ProductDetail from "./pages/ProductDetail";
import Checkout from "./pages/Checkout";
import Basket from "./components/Basket/Basket";

const App = () => {
  const [basket, setBasket] = useState([
    { id: "BDb8ZXb1v", name: "Sphynx", price: 250, quantity: 1 },
  ]);

  const onCloseBasket = () => {
    document.getElementById("overlay").classList.add("hide");
    document.getElementById("sidebar").classList.remove("open");
  };

  const addToBasket = (item) => {
    console.log("Add To Basket");
    console.log(item);
    // code to add item to basket...
  };

  const removeFromBasket = () => {
    console.log("Remove From Basket");
    // code to remove item from basket...
  };

  const emptyBasket = () => {
    setBasket([]);
  };
  return (
    <>
      <PageLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/product/:id"
            element={<ProductDetail atb={addToBasket} />}
          />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </PageLayout>

      <div id="overlay" className="overlay hide" onClick={onCloseBasket}></div>
      <Basket
        ocb={onCloseBasket}
        basket={basket}
        rfb={removeFromBasket}
        empty={emptyBasket}
      />
    </>
  );
};

export default App;
