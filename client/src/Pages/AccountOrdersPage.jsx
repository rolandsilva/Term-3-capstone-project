import React from "react";

import { useState, useEffect } from "react";
// import { useAuth } from "../../hooks/useAuth";
// import { useProvideAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
// import api from "../../utils/api.utils";

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
  const [loading, setLoading] = useState(0);
  const [error, setError] = useState(0);

  // const auth = useAuth();
  const navigate = useNavigate();

  // const { updatePassword } = useProvideAuth();

  // object destructuring user from auth.state from our
  // useAuth hook that is inside our useProvideAuth hook
  //in the hooks/useAuth.js file

  //   ******   needs to be added back in  **********
  // const {
  //   user: {
  //     _id,
  //     customerFirstName,
  //     customerLastName,
  //     customerAddress1,
  //     customerAddress2,
  //     customerCity,
  //     customerState,
  //     customerZip,
  //     customerEmail,
  //     customerPhone,
  //   },
  // } = auth.state;
  // ********* add above back in ***********

  // const handleChangePassword = async (e) => {
  //   e.preventDefault();

  //   setPasswordFormData((prev) => ({
  //     ...prev,
  //     loading: true,
  //     passwordError: null,
  //   }));

  //   const { currentPassword, password, confirmPassword } = passwordFormData;

  //   try {
  //     await updatePassword(currentPassword, password, confirmPassword);
  //     setPasswordFormData(initialPasswordFormData);
  //     toast.success("Password changed successfully");
  //   } catch (error) {
  //     console.log(error.message);
  //     toast.error(error.message);

  //     // If the user is forbidden or unauthorized, it could be an expired JWT token. Redirect to the login page.
  //     if (error.message === "Forbidden" || error.message === "Unauthorized") {
  //       navigate("/login");
  //     }
  //   } finally {
  //     setPasswordFormData((prev) => ({
  //       ...prev,
  //       loading: false,
  //     }));
  //   }
  // };

  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setPasswordFormData((prev) => ({
  //     ...prev,
  //     [name]: value,
  //   }));
  // };

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

  // const renderOrdersArray = (items) => {
  //   console.log("items: ", items)
  //   const orderItemsList = items.map((i) => (
  //     i._id, i.createdAt, i.orderTotal
  // ));
  //   console.log("orderItemsList", orderItemsList)
  //   return orderItemsList;
  // };

  const renderOrdersArray = (items) => {
    console.log("items: ", items);

    const orderItemsList = items.map(({ _id, createdAt, orderTotal }) => (
      <li key={_id}>
        <p>Order ID: {_id}</p>
        <p>Date: {new Date(createdAt).toLocaleDateString()}</p>
        <p>Total: ${orderTotal.toFixed(2)}</p>
      </li>
    ));

    // *****  orders model  ********
    // {
    //   id: {type: Number,// required: true,},
    //   orderNumber: {type: Number,// required: true,},

    //   orderContents: [
    //     {
    //       productNbr: {type: String,required: true},
    //       itemQuantity: {type: Number,required: true,},
    //     },
    //   ],
    //   couponRate: {type: Number,required: true,},
    //   orderTotal: {type: Number,required: true,},
    //   shippingTime: {type: Number,required: true,},
    //   shippingDate: {type: Date,required: true,},
    // },
    // { timestamps: true }

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
        <section className="account-info-section">
          <div className="info-title">Account Information</div>
          <div className="section-contents">
            <p>Account Number: 1234</p>
            <p>First Name: Tim</p>
            <p>Last Name: Quattrochi</p>
            <p>Email Address: Tim1234@Kenzie.com</p>
            <p>Phone Number: 123-456-7890</p>
          </div>
        </section>

        {/* 
//  ********* actual needed account data ****** */}
        {/* <section className="account-info">
          <div className="info-title">User Account Information</div>
          <p>Account Number: {_id}</p>
          <p>First Name: {customerFirstName}</p>
          <p>Last Name: {customerLastName}</p>
          <p>Email Address: {customerEmail}</p>
          <p>Phone Number: {customerPhone}</p>
        </section> */}

        <section className="middle-info-section">
        <div className="middle-info-section-image">
          {/* <div className="info-title">middle</div> */}
          <div className="middle-info-content">
            <p className="middle-info-contents-title">
              Warranties and Registering
            </p>
            <p>Computer warranties offer a safeguard for consumers, providing coverage for hardware malfunctions and defects that might arise after purchase. Typically, these warranties span one to three years, depending on the manufacturer and model. Understanding the specifics of your warranty can save you time and money when dealing with repairs.</p>
            <p>Registering your computer product is crucial to ensure you receive all the benefits of your warranty. This process often involves providing your purchase details and product serial number. Registration can also expedite customer service interactions, making it easier to address any issues that arise.</p>
            <p>Beyond warranties, registering your product can provide additional perks. Manufacturers may offer extended warranty options, updates on software, or notifications about recalls and upgrades. Staying informed through registration helps maintain your device’s performance and security.</p>
            <p>Neglecting to register your product could result in missing out on critical support and services. In some cases, unregistered products may not be eligible for warranty claims. Taking a few minutes to register can provide long-term peace of mind and ensure you make the most of your investment.</p>
          </div>
    
            <div className="orderinfo">
              {/* {orders && renderOrdersArray(orders)} */}
            </div>
          </div>
        </section>

        <section className="orders-placed-section">
          <div className="info-title">Order Details</div>

          {/* <div className="ordersplacedtitle">Order Details</div> */}
          <div className="orderinfo">
            <div className="section-contents">
              <p>Order Number: 1234</p>
              <p>---------------</p>
              {/* <p>Product Image url</p> */}
              <img src="./M3mbpmax.png" />
              {/* <img src={product.image_url} className="imgDiv" alt={product.name} /> */}
              <p>Product Name: M3 MacBook Max</p>
              <p>Product Category: MacBooks</p>
              <p>Item quantity: 2</p>
              <p>---------------</p>
              <img src="./iwatchultra.png" />
              <p>Product Name: iWatch Ultra 2</p>
              <p>Product Category: iWatches</p>
              <p>Item quantity: 1</p>
              <p>---------------</p>
              <img src="./ipadProM4.png" />
              <p>Product Name: M4 iPad Pro 13in</p>
              <p>Product Category: iPads</p>
              <p>Item quantity: 4</p>
              <p>---------------</p>
              <p>Order Total: $ 13,999</p>
            </div>
            {/* {orders && renderOrdersArray(orders)} */}
          </div>
        </section>
      </div>
    </>
  );
};
export default AccountOrdersPage;
