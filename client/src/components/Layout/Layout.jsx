import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./Layout.css";
// import Footer from "../components/Footer";

function Layout({ children }) {
  return (
    <>
      <Header />
      <ToastContainer />
      <main className="main">{children}</main>
      <div className="footerdiv">
        <Footer />
      </div>
    </>
  );
}

export default Layout;
