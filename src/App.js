import React from "react";
import { Navigate, Routes, Route } from "react-router-dom";

import PageLayout from "./page-layout/PageLayout";
import HomePage from "./pages/HomePage";
import ProductDetail from "./pages/ProductDetail";
import Checkout from "./pages/Checkout";

const App = () => {
  return (
    <PageLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </PageLayout>
  );
};

export default App;
