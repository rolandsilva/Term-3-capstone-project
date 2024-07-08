import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
// import { useUI, useProvideCart, useCurrency } from "../../hooks";
import useUI from "../../hooks/useUI";
import useProvideCart from "../../hooks/useCart";
import "./CartItem.css";
import ItemCounter from "../ItemCounter";

function CartItem({ item }) {
  const { closeSidebar } = useUI();
  const { removeAllItems } = useProvideCart();
  //   const { getPrice, symbol } = useCurrency();
  return (
    <div className="item-box">
      <div className="item-details">
        {/* <Container> */}
        <Row className="mb-4 align-items-center">
          <Col xs="9">
            <div className="d-flex gap-2 align-items-center">
              <Image
                id="cartitemimage"
                className="item-image"
                //  className="item-image mr-2 w-50 h-25"
                src={`${item.image_url}`}
              />
              <Link
                to={`/product/${item.id}`}
                // to={`/p/${item._id}`}
                className="item-link one-line-ellipsis"
                onClick={closeSidebar}
              >
                <h4>{item.name}</h4>
              </Link>
            </div>
          </Col>
          <Col xs="3" className="d-flex justify-content-end">
            <Button
              aria-label={`remove ${item.name} from cart`}
              variant="info"
              className="hover:text-gray-500 transition ease-in-out duration-150"
              onClick={() => removeAllItems(item._id)}
            >
              <FontAwesomeIcon size="xs" icon={faTrash} />
            </Button>
          </Col>
        </Row>
        <Row className="mb-2 align-items-center">
          <Col xs="8">
            <p className="item-label">price</p>
          </Col>
          <Col xs="4" className="d-flex justify-content-end">
            <p className="price item-value">{` ${"$"} ${item.price}`}</p>
          </Col>
        </Row>
        <Row className="mb-2 align-items-center">
          <Col xs="8">
            <p className="item-label">quantity</p>
          </Col>
          <Col xs="4" className="d-flex justify-content-end">
            <ItemCounter item={item} />
          </Col>
        </Row>
        <hr></hr>
        {/* </Container> */}
      </div>
    </div>
  );
}

export default CartItem;
