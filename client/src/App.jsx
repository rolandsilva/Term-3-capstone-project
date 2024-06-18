import { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
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
import RegisterPage from "./Pages/Register/RegisterPage";
import LoginPage from "./Pages/Login/LoginPage";
import Layout from "./components/Layout/Layout";
import CategoryPage from "./Pages/CategoryPage/CategoryPage";
import ProductPage from "./Pages/ProductPage";
import NotFoundPage from "./Pages/NotFoundPage";


function App() {
  return (
    <>
      {/* <ErrorBoundary> */}
      <Layout>
        <Router>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/categories" element={<CategoryPage />} />
            <Route path="/product/:id" element={<ProductPage />} />
            {/* <Route exact path="/p/:pid" element={<ProductDetailPage />} />
            <Route exact path="/cart" element={<ShoppingCartPage />} />
            <Route exact path="/checkout" element={<CheckoutPage />} /> */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Router>
      </Layout>
      {/* </ErrorBoundary> */}
    </>
  );
}

export default App;
