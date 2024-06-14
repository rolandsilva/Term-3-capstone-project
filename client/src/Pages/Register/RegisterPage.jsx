import { useState } from "react";
import { Container } from "react-bootstrap";
import "./RegisterPage.css";

const initialFormState = {
  customerFirstName: "",
  customerLastName: "",
  customerEmail: "",
  customerAddress1: "",
  customerAddress2: "",
  customerCity: "",
  customerState: "",
  customerZipCode: "",
  customerPhone: "",
  password: "",
  confirmPassword: "",
};

const RegisterPage = () => {
  const [formData, setFormData] = useState(initialFormState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    /*
    TODO: Implement form submission
    endpoint: POST /api/auth/register
    */
  };

  return (
    <Container id="register-container">
      <form id="register-form">
        <label htmlFor="customerFirstName">First Name</label>
        <input
          type="text"
          id="customerFirstName"
          name="customerFirstName"
          value={formData.customerFirstName}
          onChange={handleChange}
        />
        <label htmlFor="customerLastName">Last name</label>
        <input
          type="text"
          id="customerLastName"
          name="customerLastName"
          value={formData.customerLastName}
          onChange={handleChange}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
        />
        <label htmlFor="customerEmail">Email</label>
        <input
          type="email"
          id="customerEmail"
          name="customerEmail"
          value={formData.customerEmail}
          onChange={handleChange}
        />
        <label htmlFor="customerPhone">Phone</label>
        <input
          type="tel"
          id="customerPhone"
          name="customerPhone"
          value={formData.customerPhone}
          onChange={handleChange}
        />
        <label htmlFor="customerAddress1">Address</label>
        <input
          type="text"
          id="customerAddress1"
          name="customerAddress1"
          value={formData.customerAddress1}
          onChange={handleChange}
        />
        <label htmlFor="customerAddress2">Address 2 (optional)</label>
        <input
          type="text"
          id="customerAddress2"
          name="customerAddress2"
          value={formData.customerAddress2}
          onChange={handleChange}
        />
        <label htmlFor="customerCity">City</label>
        <input
          type="text"
          id="customerCity"
          name="customerCity"
          value={formData.customerCity}
          onChange={handleChange}
        />
        <label htmlFor="customerState">State</label>
        <input
          type="text"
          id="customerState"
          name="customerState"
          value={formData.customerState}
          onChange={handleChange}
        />

        <label htmlFor="customerZipCode">Zip Code</label>
        <input
          type="text"
          id="customerZipCode"
          name="customerZipCode"
          value={formData.customerZipCode}
          onChange={handleChange}
        />

        <button type="submit">Register</button>
      </form>
    </Container>
  );
};
export default RegisterPage;
