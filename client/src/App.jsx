import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Product from "./components/Product/Product";
import Order from "./components/Order/Order";
import Customer from "./components/Customer/Customer";
// import StockAlerts from "./components/StockAlerts/StockAlerts";
// import Reviews from "./components/Reviews/Reviews";
import HomePage from "./Pages/HomePage/HomePage";
import RegisterPage from "./Pages/Register/RegisterPage";
import LoginPage from "./Pages/Login/LoginPage";
import Layout from "./components/Layout/Layout";
import CategoryPage from "./Pages/CategoryPage/CategoryPage";
import ProductPage from "./Pages/ProductPage/ProductPage";
import AccountPage from "./Pages/Account/AccountPage";
import CheckoutPage from "./Pages/CheckoutPage";
import ContactUsPage from "./Pages/ContactUs/ContactUsPage";
import FAQPage from "./Pages/FAQ/FAQPage";
import NotFoundPage from "./Pages/NotFoundPage";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import AboutUsPage from "./Pages/AboutUs/AboutUsPage";
import BusinessSalesPage from "./Pages/businessSales/BusinessSalesPage";
import GovernmentSalesPage from "./Pages/GovernmentSales/GovernmentSalesPage";
import EducationalSalesPage from "./Pages/EducationalSales/EducationSalesPage";
import MilitarySalesPage from "./Pages/MilitarySales/MilitarySalesPage";
import TechSupportPage from "./Pages/TechSupport/TechSupportPage";
import AccountOrdersPage from "./Pages/AccountOrdersPage/AccountOrdersPage";
import TradeInPage from "./Pages/TradeIn/TradeInPage";
import CompareProductsPage from "./Pages/CompareProducts/CompareProductsPage";
import CatFilterBySearchPage from "./Pages/CatFilterBySearch/CatFilterBySearchPage";
import FilterByPrice from "./Pages/FilterByPrice/FilterByPricePage";
import ChatPage from "./Pages/ChatPage/ChatPage";
import FilterByPricePage from "./Pages/FilterByPrice/FilterByPricePage";

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
            <Route path="/trade-in-info" element={<TradeInPage />} />
            <Route
              path="/compare-products-info"
              element={<CompareProductsPage />}
            />
            <Route
              path="/category-filter-by"
              element={<CatFilterBySearchPage />}
            />
            <Route
              path="/filter-by-price"
              element={<FilterByPricePage />}
            />
            <Route path="/chat" element={<ChatPage />} />
            <Route
              path="/account/account-orders"
              element={<AccountOrdersPage />}
            />
            <Route
              path="/account-orders/:_id"
              element={<AccountOrdersPage />}
            />
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
