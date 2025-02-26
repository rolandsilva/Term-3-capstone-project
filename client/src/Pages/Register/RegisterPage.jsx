import { useState } from "react";
import { Container, Button } from "react-bootstrap";
import { useProvideAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
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
  errorMsg: null,
  loading: false,
};

const RegisterPage = () => {
  const [formData, setFormData] = useState(initialFormState);

  const auth = useProvideAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setFormData({ ...formData, loading: true, errorMsg: null });
    try {
      const user = { ...formData };
      await auth.register(user);

      navigate("/"); // TODO: Redirect to protected page.
    } catch (error) {
      console.log(error);
      setFormData({
        ...formData,
        loading: false,
        errorMsg: error ? error.message || error.statusText : null,
      });
    } finally {
      setFormData((prevFormData) => ({
        ...prevFormData,
        loading: false,
      }));
    }
  };

  return (
    <Container id="register-container">
      <form id="register-form" onSubmit={handleSubmit}>
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

        <Button type="submit" disabled={formData.loading}>
          {formData.loading ? "Loading..." : "Register"}
        </Button>

        {formData.errorMsg && (
          <span className="register-error">{formData.errorMsg}</span>
        )}
      </form>
    </Container>
  );
};
export default RegisterPage;
