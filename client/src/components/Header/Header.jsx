import React from "react";
import { Link } from "react-router-dom";
import { useAuth, useProvideAuth } from "../../hooks/useAuth";
// import { logout } from "../../hooks/useAuth"
import {
  Navbar,
  Nav,
  Badge,
  Container,
  ToggleButtonGroup,
  ToggleButton,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons/faShoppingBag";
import "./Header.css";
// import { useUI, useProvideCart } from "../../hooks";
import useUI from "../../hooks/useUI";
import useProvideCart from "../../hooks/useCart";
import CartSidebar from "../CartSideBar";

function Header() {
  const { openSidebar } = useUI();
  const { state } = useProvideCart();
  // const { toggleCurrency, symbol } = useCurrency();

  // const handleCurrencyChange = (e) => toggleCurrency();

  const auth = useAuth();
  console.log(auth);
  const isLoggedIn = auth.state.isAuthenticated;
  const { logout } = useProvideAuth();
  return (
    <>
      <CartSidebar />
      <Navbar
        className="header vertical-gradient"
        expand="lg"
        style={{ backgroundColor: "#688ac6" }}
      >
        <Container id="headercontainer">
          <Navbar.Brand className="brandcontainer">
            <Nav.Link as={Link} to={"/"}>
              <div id="headerdiv1">
                Roland's Computers, Devices and Accessories
              </div>
            </Nav.Link>
            <Nav.Link
              className="cartcontainer"
              onClick={openSidebar}
              style={{
                color: "white",
                cursor: "pointer",
                marginRight: "20px",
              }}
            >
              <span id="cart">Cart</span>
              <FontAwesomeIcon
                className=""
                icon={faShoppingBag}
                style={{
                  color: "white",
                  marginRight: "25px",
                  fontSize: "40px",
                }}
              />
              {state.itemCount > 0 && (
                <Badge
                  pill
                  style={{ color: "black" }}
                  variant="primary"
                  className="custom-badge"
                >
                  {state.itemCount}
                  {/* <p className="mb-0">{state.itemCount}</p> */}
                </Badge>
              )}
            </Nav.Link>
          </Navbar.Brand>
          {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav
              className="ms-auto"
              style={{
                display: "flex",
                minWidth: "100%",
                justifyContent: "space-between",
              }}
            >
              {/* {
                <ToggleButtonGroup 
                  name="currency"
                  value={currency}
                  onClick={handleCurrencyChange}
                >
                  <ToggleButton variant="primary" value="usd">
                    Click to change from { symbol }
                  </ToggleButton>
                  <ToggleButton variant="outline-primary" value="eur">
                    EUR
                  </ToggleButton>
                </ToggleButtonGroup>
              } */}
              <div className="linkcontainer">
                <Nav.Link
                  as={Link}
                  className="d-flex align-items-center"
                  to={"/categories/macbooks"}
                  style={{
                    color: "white",
                    marginRight: "20px",
                    whiteSpace: "nowrap",
                  }}
                >
                  MacBooks {">"}
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  className="d-flex align-items-center"
                  to={"/categories/ipads"}
                  style={{
                    color: "white",
                    marginRight: "20px",
                    whiteSpace: "nowrap",
                  }}
                >
                  iPads {">"}
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  className="d-flex align-items-center"
                  to={"/categories/airpods"}
                  style={{
                    color: "white",
                    marginRight: "20px",
                    whiteSpace: "nowrap",
                  }}
                >
                  AirPods {">"}
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  className="d-flex align-items-center"
                  to="/categories/iwatches"
                  style={{
                    color: "white",
                    marginRight: "20px",
                    whiteSpace: "nowrap",
                  }}
                >
                  iWatches {">"}
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  className="d-flex align-items-center"
                  to={"/categories/macs"}
                  style={{
                    color: "white",
                    marginRight: "20px",
                    whiteSpace: "nowrap",
                  }}
                >
                  Macs {">"}
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  className="d-flex align-items-center"
                  to={"/categories/iphones"}
                  style={{
                    color: "white",
                    marginRight: "20px",
                    whiteSpace: "nowrap",
                  }}
                >
                  iPhones {">"}
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  className="d-flex align-items-center"
                  to={"/categories/imacs"}
                  style={{
                    color: "white",
                    marginRight: "20px",
                    whiteSpace: "nowrap",
                  }}
                >
                  iMacs {">"}
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  className="d-flex align-items-center"
                  to={"/categories/displays"}
                  style={{
                    color: "white",
                    marginRight: "20px",
                    whiteSpace: "nowrap",
                  }}
                >
                  Displays {">"}
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  className="d-flex align-items-center"
                  to={"/categories/accessories"}
                  style={{
                    color: "white",
                    marginRight: "20px",
                    whiteSpace: "nowrap",
                  }}
                >
                  Accessories {">"}
                </Nav.Link>
              </div>
              <div
                className="cartdiv"
                style={{ display: "flex", marginLeft: "10px" }}
              >
                {" "}
                {isLoggedIn ? (
                  <div id="logindiv" style={{ display: "flex" }}>
                    <Nav.Link
                      as={Link}
                      className="d-flex align-items-center custom-login"
                      to={"/"}
                      style={{ color: "lightblue", marginRight: "20px" }}
                      onClick={logout}
                    >
                      LogOut
                    </Nav.Link>
                    <Nav.Link
                      as={Link}
                      className="d-flex align-items-center custom-login"
                      to={"/account"}
                      style={{ color: "lightblue", marginRight: "20px" }}
                    >
                      Account
                    </Nav.Link>
                  </div>
                ) : (
                  <div id="logindiv" style={{ display: "flex" }}>
                    {" "}
                    <Nav.Link
                      as={Link}
                      className="d-flex align-items-center custom-login"
                      to={"/login"}
                      style={{ color: "lightblue", marginRight: "20px" }}
                    >
                      Login
                    </Nav.Link>
                    <Nav.Link
                      as={Link}
                      className="d-flex align-items-center custom-login"
                      to={"/register"}
                      style={{ color: "lightblue", marginRight: "20px" }}
                    >
                      Register
                    </Nav.Link>
                  </div>
                )}
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;

{
  /* <div class="vertical-gradient">
<h1 class="text-center">Vertical Gradient from Blue to White</h1>
</div> */
}
