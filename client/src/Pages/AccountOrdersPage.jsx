import React from "react";

import { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { useProvideAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
import api from "../utils/api.utils";
import "./AccountOrdersPage.css";

const initialPasswordFormData = {
  currentPassword: "",
  password: "",
  confirmPassword: "",
  passwordError: null,
  loading: false,
};

const AccountOrdersPage = () => {
  const [passwordFormData, setPasswordFormData] = useState(
    initialPasswordFormData
  );

  const [orders, setOrders] = useState(0);
  const [orderDetails, setOrderDetails] = useState(0);
  const [loading, setLoading] = useState(0);
  const [error, setError] = useState(0);

  const location = useLocation();
  const { order } = location.state || {}; // Destructure the state to get the product data
  const { _id: orderId } = useParams();
  // console.log(location);

  const auth = useAuth();
  const navigate = useNavigate();

  const { updatePassword } = useProvideAuth();

  const {
    user: {
      _id,
      customerFirstName,
      customerLastName,
      customerAddress1,
      customerAddress2,
      customerCity,
      customerState,
      customerZip,
      customerEmail,
      customerPhone,
    },
  } = auth.state;



  useEffect(() => {
    const getOrders = async () => {
      setLoading(true);
      try {
        const orders = await api.get(`/orders/`);
        console.log(orders);
        setOrders(orders.data.orders);
        setLoading(false);
      } catch (err) {
        console.error(err.message);
        setLoading(false);
        setError(true);
      }
    };
    getOrders();
  }, []);

  useEffect(() => {
    const singleOrder =
      orders &&
      orders.filter((item) => {
        return item._id === orderId;
      });
    // console.log(order);
    // console.log(singleOrder);
    setOrderDetails(singleOrder[0]);
    console.log(orderDetails);
  }, [orders, order, orderId]);

  const renderOrdersArray = (items) => {
    const orderItemsList = items.map(({ _id, createdAt, orderTotal }) => (
      <li key={_id}>
        <p>Order ID: {_id}</p>
        <p>Date: {new Date(createdAt).toLocaleDateString()}</p>
        <p>Total: ${orderTotal.toFixed(2)}</p>
      </li>
    ));

    console.log("orderItemsList", orderItemsList);

    return <ul>{orderItemsList}</ul>;
  };

  if (loading) {
    return <div>Loading...</div>;
  }
  // TODO: Make a form component to handle the login, register, and password change forms. This can be a stretch goal.

  return (
    <>
      <div className="account-container">
  

        <section className="account-info">
          <div className="info-title">User Account Information</div>
          <p>Account Number: {_id}</p>
          <p>First Name: {customerFirstName}</p>
          <p>Last Name: {customerLastName}</p>
          <p>Email Address: {customerEmail}</p>
          <p>Phone Number: {customerPhone}</p>
        </section>

        <section className="middle-info-section">
          <div className="middle-info-section-image">
            {/* <div className="info-title">middle</div> */}
            <div className="middle-info-content">
              <p className="middle-info-contents-title">
                Warranties and Registering
              </p>
              <p>
                Computer warranties offer a safeguard for consumers, providing
                coverage for hardware malfunctions and defects that might arise
                after purchase. Typically, these warranties span one to three
                years, depending on the manufacturer and model. Understanding
                the specifics of your warranty can save you time and money when
                dealing with repairs.
              </p>
              <p>
                Registering your computer product is crucial to ensure you
                receive all the benefits of your warranty. This process often
                involves providing your purchase details and product serial
                number. Registration can also expedite customer service
                interactions, making it easier to address any issues that arise.
              </p>
              <p>
                Beyond warranties, registering your product can provide
                additional perks. Manufacturers may offer extended warranty
                options, updates on software, or notifications about recalls and
                upgrades. Staying informed through registration helps maintain
                your device’s performance and security.
              </p>
              <p>
                Neglecting to register your product could result in missing out
                on critical support and services. In some cases, unregistered
                products may not be eligible for warranty claims. Taking a few
                minutes to register can provide long-term peace of mind and
                ensure you make the most of your investment.
              </p>
            </div>

            <div className="orderinfo">
              {/* {orders && renderOrdersArray(orders)} */}
            </div>
          </div>
        </section>

        <section className="orders-placed-section">
          <div className="info-title">Order Details</div>
          <div className="orderinfo">
            <div className="section-contents">
              {orderDetails && (
                <>
                  <p>Order Number: {orderId}</p>
                  <p>Order Date: {orderDetails.createdAt}</p>
                  {orderDetails.orderContents.map((item) => (
                    <div key={item._id}>
                      <p>---------------</p>
                      {/* <p>Product Image url</p> */}
                      <img src={`${item.image_url}`} />
                      <p>Product Name: {item.name}</p>
                      <p>Product Category: {item.category}</p>
                      <p>Item quantity: {item.itemQuantity}</p>
                    </div>
                  ))}

                  <p>---------------</p>
                  <p>Order Total: $ {orderDetails.orderTotal}</p>
                </>
              )}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default AccountOrdersPage;
