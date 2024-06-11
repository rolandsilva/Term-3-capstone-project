import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Product from "./components/Product/Product";
import Order from "./components/Order/Order";
import Customer from "./components/Customer/Customer";
import StockAlerts from "./components/StockAlerts/StockAlerts";
import Reviews from "./components/Reviews/Reviews";
import Faqs from "./components/Faqs/Faqs";
import * as exampleData from "./exampleData";
import HomePage from "./Pages/HomePage";
import Layout from "./components/Layout";

function App() {
  return (
    <>
      {/* <ErrorBoundary> */}
        <Layout>
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          {/* <Route exact path="/p/:pid" element={<ProductDetailPage />} />
            <Route exact path="/cart" element={<ShoppingCartPage />} />
            <Route exact path="/checkout" element={<CheckoutPage />} /> */}
          {/* <Route path="*" element={<NotFoundPage />} /> */}
        </Routes>
      </Router>
      </Layout>
      {/* </ErrorBoundary> */}
    </>
  );
}

export default App;
