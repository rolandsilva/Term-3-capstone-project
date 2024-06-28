import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
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
import AccountPage from "./Pages/Account/AccountPage";
import CheckoutPage from "./Pages/CheckoutPage";
import ContactUsPage from "./Pages/ContactUSPage";
import FAQPage from "./Pages/FAQPage";
import NotFoundPage from "./Pages/NotFoundPage";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import BottomLinkPage from "./Pages/BottomLinkPage";
import AboutUsPage from "./Pages/AboutUsPage";
import BusinessSalesPage from "./Pages/BusinessSalesPage";
import GovernmentSalesPage from "./Pages/GovernmentSalesPage";
import EducationalSalesPage from "./Pages/EducationSalesPage";
import MilitarySalesPage from "./Pages/MilitarySalesPage";
import TechSupportPage from "./Pages/TechSupportPage";

function App() {
  return (
    <>
      {/* <ErrorBoundary> */}

      <Router>
        <Layout>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/categories/:name" element={<CategoryPage />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/business" element={<BusinessSalesPage />} />
            <Route path="/government" element={<GovernmentSalesPage />} />
            <Route path="/education" element={<EducationalSalesPage />} />
            <Route path="/military-veterans" element={<MilitarySalesPage />} />
            <Route path="/tech-support" element={<TechSupportPage />} />
            <Route path="/about-us" element={<AboutUsPage />} />
            <Route path="/contact-us" element={<ContactUsPage />} />
            {/* Protected Routes */}
            <Route path="/account" element={<ProtectedRoute />}>
              <Route path="/account" element={<AccountPage />} />
            </Route>
            <Route path="/faq" element={<FAQPage />} />
            {/* <Route exact path="/p/:pid" element={<ProductDetailPage />} />
            <Route exact path="/cart" element={<ShoppingCartPage />} /> */}
            <Route path="/checkout" element={<ProtectedRoute />}>
              {" "}
              <Route exact path="/checkout" element={<CheckoutPage />} />
            </Route>

            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Layout>
      </Router>

      {/* </ErrorBoundary> */}
    </>
  );
}

export default App;
