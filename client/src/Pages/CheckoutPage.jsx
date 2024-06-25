import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { toast } from "react-toastify";
import useProvideCart from "../hooks/useCart"
// import { createOrder } from "../utils/axiosService";
// import { CheckoutForm, ErrorBoundary } from "../components";
import CheckoutForm from "../components/CheckoutForm/index"
import ErrorBoundary  from "../components/ErrorBoundary";
import { Link } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";

const initialState = {
  isSubmitting: false,
  isConfirmed: false,
  errorMessage: null,
};

function CheckoutPage() {
  const [data, setData] = useState(initialState);
  const { state, resetCart, calculateCartTotal } = useProvideCart();
  const [orderId, setOrderId] = useState("")

  const placeOrder = async (orderFormData) => {
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
      const orderConfirmation = await createOrder(orderData);
      toast(`Order Placed Successfully, ${orderConfirmation.data.orderId})`);
      setOrderId(orderConfirmation.data.orderId)
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
      <Container
        className="text-info"
        style={{
          backgroundImage: "url('/hero_image.png')",
          backgroundSize: "cover",
          height: "350px",
          marginTop: "45px",
        }}
      >
        <h1 style={{ marginTop: "100px" }}>Thank you!</h1>
      </Container>
      <ErrorBoundary>
        {data.errorMessage && <p className="form-error">{data.errorMessage}</p>}
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
                  ${orderId}` }

                </p>
              )}

              <div className="col-sm-12 d-flex justify-content-center">
                <p>You'll receive confirmation in your email shortly.</p>
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
