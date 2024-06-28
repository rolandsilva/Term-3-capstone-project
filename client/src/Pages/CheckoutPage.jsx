import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { toast } from "react-toastify";
import useProvideCart from "../hooks/useCart";
// import { createOrder } from "../utils/axiosService";
import CheckoutForm from "../components/CheckoutForm/index";
import ErrorBoundary from "../components/ErrorBoundary";
import { Link } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";
import api from "../utils/api.utils";

const initialState = {
  isSubmitting: false,
  isConfirmed: false,
  errorMessage: null,
};

function CheckoutPage() {
  const [data, setData] = useState(initialState);
  const { state, resetCart, calculateCartTotal, createOrder } =
    useProvideCart();
  const [orderSummary, setOrderSummary] = useState(null);

  const placeOrder = async (orderFormData) => {
    console.log(orderFormData);
    let orderData = {
      customerDetails: orderFormData,
      items: state.cart,
      couponRate: state.couponRate ?? 0,
      orderTotal: calculateCartTotal(state.cart),
    };
    setData({
      ...data,
      isSubmitting: true,
      errorMessage: null,
    });
    try {
      const orderConfirmation = await api.post("/orders", orderData);
      console.log("order response", orderConfirmation);
      // const orderConfirmation = await createOrder(orderData);
      toast(
        `Order Placed Successfully, ${orderConfirmation.data.orderId})`
      );

      // TODO: Check response and make sure the data is correct for order summary.
      setOrderSummary(orderConfirmation.data.orderData.orderContents);
      resetCart();
      setData({
        isSubmitting: false,
        isConfirmed: true,
        errorMessage: null,
      });
    } catch (error) {
      setData({
        ...data,
        isSubmitting: false,
        errorMessage: "Error Placing Order",
      });
    }
  };

  if (data.isSubmitting) {
    return <LoadingSpinner full />;
  }

  return (
    <>
      {/* <Container
        className="text-info"
        style={{
          backgroundImage: "url('/hero_image.png')",
          backgroundSize: "cover",
          height: "350px",
          marginTop: "45px",
        }}
      > */}
      <h2 style={{ marginTop: "20px" }}>Order Confirmation Page</h2>
      {/* </Container> */}
      <ErrorBoundary>
        {data.errorMessage && (
          <p className="form-error">{data.errorMessage}</p>
        )}
        {state.itemCount && !data.isConfirmed ? (
          <CheckoutForm placeOrder={placeOrder} />
        ) : (
          <Container className="h-50">
            <div className="row justify-content-center">
              {data.isConfirmed && (
                <p
                  style={{
                    fontSize: "26px",
                    marginBottom: "30px",
                    marginTop: "20px",
                  }}
                >
                  {`Your order is confirmed! 
                  ${
                    orderSummary && (
                      <div>
                        Your Order Number is:
                        {JSON.stringify(orderSummary)}
                        <br />
                        Your Order Total is: $
                        {orderSummary.orderTotal}
                      </div>
                    )
                  }`}
                </p>
              )}

              <div className="col-sm-12 d-flex justify-content-center">
                <p>
                  You'll receive confirmation in your email shortly.
                </p>
              </div>
              <div className="col-sm-12 d-flex justify-content-center">
                <Link to="/">Continue shopping!</Link>
              </div>
            </div>
          </Container>
        )}
      </ErrorBoundary>
    </>
  );
}

export default CheckoutPage;
