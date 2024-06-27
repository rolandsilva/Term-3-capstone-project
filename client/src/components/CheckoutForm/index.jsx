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
import ShippingAddress from "../../Pages/ShippingAddressPage";

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
  const [hasShippingAddressDifferent, setHasShippingAddressDifferent] =
    useState(false);

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
        <section className="accountsession">
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
                {"$"} {state.cartTotal}
              </p>
            </Col>
          </Row>
        </section>
      </div>
      {/* this is the shippigaddress checkbox */}
      <section className="shippingsection">
        <div className="row">
          <div className="col-md-12 mb-3">
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="same-address"
                onChange={() => {
                  setHasShippingAddressDifferent(
                    hasShippingAddressDifferent ? false : true
                  );
                }}
              />
              <label
                className="custom-control-label ms-3"
                htmlFor="same-address"
              >
                Shipping address is not the same as my billing address
              </label>
            </div>
            {hasShippingAddressDifferent && (
              <ShippingAddress
                handleInputChange={handleInputChange}
                data={data}
                handlePlaceOrder={handlePlaceOrder}
              />
            )}
          </div>
        </div>
      </section>
      <section className="creditcardsection">
        <h4
          // style={{
          //   backgroundColor: "#c1c8dc",
          //   color: "black",
          //   border: "2px solid black",
          //   padding: "10px", // Adjust the padding as needed
          //   display: "inline-block", // Keeps the box tight around the text and allows it to be on its own line
          //   whiteSpace: "nowrap", // Prevents text wrapping within the box
          //   marginBottom: "20px", // Adds space below the box
          // }}
        >
          Payment Method
        </h4>
        <PaymentInputsWrapper {...wrapperProps}>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label htmlFor="nameOnCard">Name on card</label>
              <input
                type="text"
                className="form-control"
                id="nameOnCard"
                placeholder=""
                required
                value={data.nameOnCard}
                onChange={handleInputChange}
              />
              <div className="invalid-feedback">Name on card is required.</div>
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="cardNumber">Card number</label>
              <input
                {...getCardNumberProps({
                  onChange: (e) =>
                    setData({ ...data, cardNumber: e.target.value }),
                })}
                className="form-control"
                id="cardNumber"
                placeholder="1234 5678 9012 3456"
                required
              />
              <div className="invalid-feedback">Card number is required.</div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 mb-3">
              <label htmlFor="cardExpir">Expiration date</label>
              <input
                {...getExpiryDateProps({
                  onChange: (e) =>
                    setData({ ...data, cardExpir: e.target.value }),
                })}
                className="form-control"
                id="cardExpir"
                placeholder="MM/YY"
                required
              />
              <div className="invalid-feedback">Expiration date required.</div>
            </div>
            <div className="col-md-4 mb-3">
              <label htmlFor="cardPin">CVC</label>
              <input
                {...getCVCProps({
                  onChange: (e) =>
                    setData({ ...data, cardPin: e.target.value }),
                })}
                className="form-control"
                id="cardPin"
                placeholder="123"
                required
              />
              <div className="invalid-feedback">CVC required.</div>
            </div>
            <div className="col-md-4 mb-3">
              <svg {...getCardImageProps({ images })} />
            </div>
          </div>
        </PaymentInputsWrapper>
      </section>
{/* ******* confirm and complete button section */}
      <section className="confirmbuttonsection">
        <hr className="col-md-12 mb-4" />
        <div className="row justify-content-center">
          <div className="col-auto">
            <Button variant="info" size="lg" className="m-2" type="submit">
              Confirm and Submit Order
            </Button>
          </div>
        </div>
      </section>
      {/* </form> */}
      {/* </div> */}
    </>
  );
}

export default CheckoutForm;
