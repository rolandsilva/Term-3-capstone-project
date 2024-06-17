import { useState } from "react";
import { Container, Button } from "react-bootstrap";
import { useProvideAuth } from "../../hooks/useAuth";
import { setAuthToken } from "../../utils/api.utils";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";

const initialFormState = {
  customerEmail: "",
  password: "",
  errorMsg: null,
  loading: false,
};

const LoginPage = () => {
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
      const res = await auth.login(
        formData.customerEmail,
        formData.password
      );

      setAuthToken(res.data.token);

      navigate("/"); // TODO: Redirect to protected page.
    } catch (error) {
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
    <Container id="login-container">
      <form id="login-form" onSubmit={handleSubmit}>
        <label htmlFor="customerEmail">Email</label>
        <input
          type="email"
          id="customerEmail"
          name="customerEmail"
          value={formData.customerEmail}
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

        <Button type="submit" disabled={formData.loading}>
          {formData.loading ? "Loading..." : "Login"}
        </Button>
        <span>
          {formData.errorMsg && (
            <span className="login-error">{formData.errorMsg}</span>
          )}
        </span>
      </form>
    </Container>
  );
};
export default LoginPage;
