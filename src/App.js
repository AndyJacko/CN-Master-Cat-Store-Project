import React, { useState } from "react";
import { Navigate, Routes, Route } from "react-router-dom";

import PageLayout from "./page-layout/PageLayout";
import HomePage from "./pages/HomePage";
import ProductDetail from "./pages/ProductDetail";
import Checkout from "./pages/Checkout";
import Basket from "./components/Basket/Basket";

const App = () => {
  const [basket, setBasket] = useState([]);

  const onCloseBasket = () => {
    document.getElementById("overlay").classList.add("hide");
    document.getElementById("sidebar").classList.remove("open");
  };

  const addToBasket = (item) => {
    const existingCartItem = basket.find((cartItem) => cartItem.id === item.id);

    if (existingCartItem) {
      const newItems = basket.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: +cartItem.quantity + +item.quantity }
          : cartItem
      );

      setBasket(newItems);
    } else {
      setBasket([...basket, item]);
    }
  };

  const removeFromBasket = (item) => {
    console.log("Remove From Basket");
    console.log(item);
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
          <Route path="/checkout" element={<Checkout basket={basket} />} />
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
