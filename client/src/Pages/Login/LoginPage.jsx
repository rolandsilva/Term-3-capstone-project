import { useState } from "react";
import { Container } from "react-bootstrap";
import { useProvideAuth } from "../../hooks/useAuth";
import { setAuthToken } from "../../utils/api.utils";
import "./LoginPage.css";

const initialFormState = {
  customerEmail: "",
  password: "",
};

const LoginPage = () => {
  const [formData, setFormData] = useState(initialFormState);

  const auth = useProvideAuth();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    /*
    TODO: Implement form submission
    endpoint: POST /api/auth/register
    */
    e.preventDefault();

    try {
      const res = await auth.login(formData);
      setAuthToken(res.data.token);
    } catch (error) {
      console.log(error);
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

        <button type="submit">Login</button>
      </form>
    </Container>
  );
};
export default LoginPage;
