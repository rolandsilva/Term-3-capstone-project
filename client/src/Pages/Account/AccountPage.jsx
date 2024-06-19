import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { useProvideAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
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

  const auth = useAuth();
  const navigate = useNavigate();

  const { updatePassword } = useProvideAuth();

  const {
    user: {
      customer: {
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
    },
  } = auth.state;

  const handleChangePassword = async (e) => {
    e.preventDefault();

    const { currentPassword, password, confirmPassword } =
      passwordFormData;

    try {
      await updatePassword(
        currentPassword,
        password,
        confirmPassword
      );
      setPasswordFormData(initialPasswordFormData);
      toast.success("Password changed successfully");
    } catch (error) {
      console.log(error.message);
      toast.error(error.message);

      // If the user is forbidden or unauthorized, it could be an expired JWT token. Redirect to the login page.
      if (
        error.message === "Forbidden" ||
        error.message === "Unauthorized"
      ) {
        navigate("/login");
      }
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPasswordFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

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
        <section>
          <div className="info-title">Saved Items</div>
          <p>Coming soon...</p>
        </section>
      </div>
      <section className="account-password-container">
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
            value={passwordFormData.currentPassword}
            onChange={handleInputChange}
            required
          />
          <label htmlFor="password">New Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={passwordFormData.password}
            onChange={handleInputChange}
            required
          />
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={passwordFormData.confirmPassword}
            onChange={handleInputChange}
            required
          />
          <button type="submit">Change Password</button>
        </form>
      </section>
    </>
  );
};
export default AccountPage;
