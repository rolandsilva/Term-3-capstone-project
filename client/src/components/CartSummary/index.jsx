import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
// import { useCurrency } from "../../hooks";
import { useState, useEffect } from "react";
// import useAxios from "../../hooks/useAxios";
import useProvideCart from "../../hooks/useCart";
// import { verifyCoupon } from "../../utils/axiosService";


const handleInputChange = (e) =>
  setData({ ...data, [e.target.id]: e.target.value });

function CartSummary({ cartTotal }) {
  // const { getPrice, symbol } = useCurrency();
  const [coupon, setCoupon] = useState("");
  const [ couponFlag, setCouponFlag ] = useState(false);
  // const { data } = useAxios({
  //   config: { url: "coupons/verify/KENZIE40" },
  // });
  const { applyCoupons } = useProvideCart();

  const apply = async () => {
    const res = await verifyCoupon(coupon)
    console.log(res)
    if (!couponFlag && res.data) {
    applyCoupons(res.data.couponsRate)
    setCouponFlag (true)
    }
    // const res = useAxios({
    //   config: { url: "coupons/verify/KENZIE40" },
    // });
    // console.log(res)
  };
  return (
    <div className="cart-summary">
      <Container>
        <div className="col-md-6 mb-3">
          <label htmlFor="couponCode">Coupon Code </label>
          <input
            type="text"
            className="form-control"
            id="couponCode"
            placeholder=""
            required
            value={coupon}
            onChange={(e) => setCoupon(e.target.value)}
          />
          <div className="invalid-feedback">Valid Coupon Code is required.</div>
        </div>
        <div className="row">
          <Col
            xs={6}
            as={Button}
            variant="info"
            size="lg"
            className="btn-block m-2"
            type="submit"
            onClick={apply}
          >
            Apply
          </Col>
          {couponFlag && <Col>
            Applied Coupon: {coupon}
          </Col>
}
        </div>


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
            {/* <p className="summary-value">
              {"$"} {getPrice(cartTotal)}
            </p> */}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default CartSummary;
