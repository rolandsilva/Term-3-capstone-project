import { useState, useEffect } from "react";
import { useAuth } from "../../hooks/useAuth";
import { useProvideAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
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
        <Link
          key={_id}
          to={{
            pathname: `/account-orders/${_id}`,
            state: { order: items },
          }}
        >
          Order ID: {_id}
          {/* <Link to="/account-order" className="accountorderlink">
          Order ID: {_id}
          <p>Order ID: {_id}</p> */}
        </Link>

        <p>Date: {new Date(createdAt).toLocaleDateString()}</p>
        <p>Total: ${orderTotal.toFixed(2)}</p>
      </li>
    ));

    // <Link>Order ID: {_id}</Link>

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
        <section className="account-user-info">
          <div className="info-title">User Account Information</div>
          <p className="acctnbr">Account Number: {_id}</p>
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

      {/* ******** end of account orders div ****** */}

      {/* ****** start of password info  div ****** */}

      {/* <section className="account-password-container"> */}

      <div>
        <div className="account-password-info-container">
          <section className="account-password-section">
            <div className="info-title">Change Password</div>
            <form
              className="account-password-form"
              onSubmit={handleChangePassword}
            >
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
              <button
                className="passwordbutton"
                type="submit"
                disabled={passwordFormData.loading}
              >
                {passwordFormData.loading ? "Loading..." : "Change Password"}
              </button>
            </form>
          </section>

          <section className="account-info-section">
            <div className="info-title">Tips for Better Passwords</div>
            <div className="account-info-box">
              <p>
                Use a Mix of Characters: Combine uppercase and lowercase
                letters, numbers, and special characters (such as !, @, #, $, %,
                etc.) to make your password harder to guess. For example,
                “P@ssw0rd!23” is much stronger than “password123”.
              </p>
              <p>
                Make it Long and Unique: Aim for at least 12-16 characters. The
                longer your password, the more secure it is. Avoid using common
                words, phrases, or easily guessable information like your name
                or birthdate.
              </p>
              <p>
                Avoid Reusing Passwords: Never use the same password for
                multiple accounts. If one account gets compromised, using the
                same password for others makes them vulnerable too. Consider
                using a password manager to keep track of unique passwords for
                each account.
              </p>
              <p>Use Passphrases:
              	Create a passphrase by stringing together random words or a sentence that’s easy for you to remember but hard for others to guess. For example, “PurpleDragonSunsetBeach2024!” is both long and complex.</p>
              <p>Enable Two-Factor Authentication (2FA):
              	Wherever possible, enable two-factor authentication. This adds an extra layer of security by requiring not just your password, but also a second form of verification (like a code sent to your phone) to access your account.</p>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};
export default AccountPage;
