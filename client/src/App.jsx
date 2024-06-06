import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import Product from "./components/Product/Product";
import Order from "./components/Order/Order";
import Customer from "./components/Customer/Customer";
import StockAlerts from "./components/StockAlerts/StockAlerts";
import Reviews from "./components/Reviews/Reviews";
import Faqs from "./components/Faqs/Faqs";
import * as exampleData from "./exampleData";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <div className="appContainer">

          <Product product={exampleData.exampleProductData} />

          <Order order={exampleData.exampleOrderData} />

          <Customer customer={exampleData.exampleCustomerData} />

          <Reviews reviews={exampleData.exampleReviewsData} />

          <StockAlerts stockAlerts={exampleData.exampleStockAlertData} />

          <Faqs faqs={exampleData.exampleFAQsData} />
        </div>
    </>
  );
}

export default App;
