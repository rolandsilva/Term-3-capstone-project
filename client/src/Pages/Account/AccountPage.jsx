import { useState, useEffect } from "react";
import { useAuth } from "../../hooks/useAuth";
import { useProvideAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../../utils/api.utils";

import "./AccountPage.css";

const initialPasswordFormData = {
  currentPassword: "",
  password: "",
  confirmPassword: "",
  passwordError: null,
  loading: false,
};

const AccountPage = () => {
  const [passwordFormData, setPasswordFormData] = useState(
    initialPasswordFormData
  );

  const [orders, setOrders] = useState(0);
  const [loading, setLoading] = useState(0);
  const [error, setError] = useState(0);

  const auth = useAuth();
  const navigate = useNavigate();

  const { updatePassword } = useProvideAuth();

  // object destructuring user from auth.state from our
  // useAuth hook that is inside our useProvideAuth hook
  //in the hooks/useAuth.js file
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

  const handleChangePassword = async (e) => {
    e.preventDefault();

    setPasswordFormData((prev) => ({
      ...prev,
      loading: true,
      passwordError: null,
    }));

    const { currentPassword, password, confirmPassword } = passwordFormData;

    try {
      await updatePassword(currentPassword, password, confirmPassword);
      setPasswordFormData(initialPasswordFormData);
      toast.success("Password changed successfully");
    } catch (error) {
      console.log(error.message);
      toast.error(error.message);

      // If the user is forbidden or unauthorized, it could be an expired JWT token. Redirect to the login page.
      if (error.message === "Forbidden" || error.message === "Unauthorized") {
        navigate("/login");
      }
    } finally {
      setPasswordFormData((prev) => ({
        ...prev,
        loading: false,
      }));
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPasswordFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

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
          <p>Address 1: {customerAddress1}</p>
          {customerAddress2 && <p>Apt/Floor: {customerAddress2}</p>}
          <p>City: {customerCity}</p>
          <p>State: {customerState}</p>
          <p>Zip Code: {customerZip}</p>
          <p>Email Address: {customerEmail}</p>
          <p>Phone Number: {customerPhone}</p>
        </section>

        <section className="ordersplacedsection">
          <div className="ordersplacedtitle">Orders Placed</div>
          <div className="orderinfo">
          {/* <h2>Order List</h2> */}
          {orders && renderOrdersArray(orders)}
          </div>
        </section>


      </div>
      <section className="account-password-container">
        <div className="info-title">Change Password</div>
        <form className="account-password-form" onSubmit={handleChangePassword}>
          <label htmlFor="currentPassword">Current Password</label>
          <input
            type="password"
            id="currentPassword"
            name="currentPassword"
            autoComplete="current-password"
            value={passwordFormData.currentPassword}
            onChange={handleInputChange}
            required
          />
          <label htmlFor="password">New Password</label>
          <input
            type="password"
            id="password"
            name="password"
            autoComplete="new-password"
            value={passwordFormData.password}
            onChange={handleInputChange}
            required
          />
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            autoComplete="new-password"
            value={passwordFormData.confirmPassword}
            onChange={handleInputChange}
            required
          />
          <button className="passwordbutton" type="submit" disabled={passwordFormData.loading}>
            {passwordFormData.loading ? "Loading..." : "Change Password"}
          </button>
        </form>
      </section>
    </>
  );
};
export default AccountPage;
