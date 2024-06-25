import React, { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import useProvideCart from "../../hooks/useCart";
import CartList from "../CartList";
import { PaymentInputsWrapper, usePaymentInputs } from "react-payment-inputs";
import images from "react-payment-inputs/images";
// import "./CheckoutForm.scss";
import "./CheckoutForm.scss";
import { Button, Col, Form, Row } from "react-bootstrap";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  address1: "",
  address2: "",
  country: "",
  state: "",
  zipCode: "",
  nameOnCard: "",
  cardNumber: "",
  cardExpir: "",
  cardPin: "",
};

function CheckoutForm({ placeOrder }) {
  const [data, setData] = useState(initialState);

  // const { closeShippingAddress, displayShippingAddress } = useUI();

  const { state } = useProvideCart();

  const auth = useAuth();
  const navigate = useNavigate();

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

  const {
    wrapperProps,
    getCardImageProps,
    getCardNumberProps,
    getExpiryDateProps,
    getCVCProps,
  } = usePaymentInputs();

  const handleInputChange = (e) =>
    setData({ ...data, [e.target.id]: e.target.value });

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    e.stopPropagation();
    placeOrder(data);
  };
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
        <section className="ordersection">
          <div className="info-title saved">Order Information</div>
          <p>Coming soon...</p>
          {state.cart.length > 0 ? (
        <div className="cart-body">
          <CartList cartItems={state.cart} />
        </div>
      ) : (
        <div className="empty-cart">
          <p>Your shopping cart is empty</p>
        </div>
      )}
              <Row className="mb-2 summary-item">
          <Col xs="9">
            <p className="summary-label">Free Shipping</p>
          </Col>
          <Col xs="3" className="text-right">
            <p className="summary-value">$0</p>
          </Col>
        </Row>
        <Row className="mb-2 summary-item">
          <Col xs="9">
            <p className="summary-label">Total</p>
          </Col>
          <Col xs="3" className="text-right">
            <p className="summary-value">
              {"$"} {(state.cartTotal)}
            </p>
          </Col>
        </Row>
{/* adding information for displaying cart contents */}
        </section>
        {/* <section className="shippingaddress"> */}
      </div>
      <div className="container" style={{ maxWidth: "960px" }}>
        <form
          className="needs-validation"
          noValidate
          onSubmit={handlePlaceOrder}
        >
          <h4 className="mb-3">Shipping ddress</h4>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label htmlFor="firstName">First name</label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                placeholder=""
                required
                value={data.firstName}
                onChange={handleInputChange}
              />
              <div className="invalid-feedback">
                Valid first name is required.
              </div>
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="lastName">Last name</label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                placeholder=""
                required
                value={data.lastName}
                onChange={handleInputChange}
              />
              <div className="invalid-feedback">
                Valid last name is required.
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 mb-3">
              <label htmlFor="email">
                Email <span className="text-muted">(Optional)</span>
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="you@example.com"
                value={data.email}
                onChange={handleInputChange}
              />
              <div className="invalid-feedback">
                Please enter a valid email address for shipping updates.
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                className="form-control"
                id="address1"
                placeholder="1234 Main St"
                required
                value={data.address1}
                onChange={handleInputChange}
              />
              <div className="invalid-feedback">
                Please enter your shipping address.
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <label htmlFor="address2">
                Address 2 <span className="text-muted">(Optional)</span>
              </label>
              <input
                type="text"
                className="form-control"
                id="address2"
                placeholder="Apartment or suite"
                value={data.address2}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 mb-3">
              <label htmlFor="country">Country</label>
              <Form.Select
                className="custom-select d-block w-100"
                id="country"
                required
              >
                <option value="">Choose...</option>
                <option>United States</option>
              </Form.Select>
              <div className="invalid-feedback">
                Please select a valid country.
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <label htmlFor="state">State</label>
              <Form.Select
                className="custom-select d-block w-100"
                id="state"
                required
              >
                <option value="">Choose...</option>
                <option>California</option>
              </Form.Select>
              <div className="invalid-feedback">
                Please provide a valid state.
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <label htmlFor="zip">Zip</label>
              <input
                type="text"
                className="form-control"
                id="zipCode"
                placeholder=""
                required
                value={data.zipCode}
                onChange={handleInputChange}
              />
              <div className="invalid-feedback">Zip code required.</div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 mb-3">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="same-address"
                />
                <label
                  className="custom-control-label ms-3"
                  htmlFor="same-address"
                >
                  Shipping address is the same as my billing address
                </label>
              </div>
            </div>
          </div>
          <hr className="col-md-12 mb-4" />
          <div className="row">
            <Col
              xs={6}
              as={Button}
              variant="info"
              size="lg"
              className="btn-block m-2"
              type="submit"
            >
              Complete Order
            </Col>
          </div>
        </form>
      </div>
    </>
  );
}

export default CheckoutForm;
