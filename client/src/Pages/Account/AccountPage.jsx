import { useAuth } from "../../hooks/useAuth";
import "./AccountPage.css";

const AccountPage = () => {
  const auth = useAuth();

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

  // TODO: Create an effect that uses the customer id to fetch saved items.

  // Create a form to change the password.

  return (
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
    </div>
  );
};
export default AccountPage;
