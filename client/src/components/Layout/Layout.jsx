import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import Header from "../Header";
import Footer from "../Footer";
// import Footer from "../components/Footer";

function Layout({ children }) {
  return (
    <>
      <Header />
      <ToastContainer />
      <main className="main">{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
