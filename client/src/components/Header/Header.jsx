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
        <div id="headercontainer" className="custom-container">
          <div className="brandcontainer">
            <Nav.Link as={Link} to={"/"} className="titlecontainer">
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
                className="shoppingBagIcon"
                icon={faShoppingBag}
                style={{
                  color: "white",
                  marginRight: "25px",
                  // fontSize: "40px",
                }}
              />
              {state.itemCount > 0 && (
                // <Badge
                //   pill
                //   style={{ color: "black" }}
                //   variant="primary"
                //   // className="custom-badge"
                //   id="custom-badge"
                // >
                <div id="custom-badge">
                  {state.itemCount}
                  {/* <p className="mb-0">{state.itemCount}</p> */}
                </div>
                // </Badge>
              )}
            </Nav.Link>
          </div>
          {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
          <div id="links-navbar">
            <Nav id="navitems">
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

              {/*  add div with select box for links, hidden in css  regular css display hidden in media query then in media query display hidden for link container */}

              <div className="linkcontainer">
                <Nav.Link
                  as={Link}
                  className="d-flex align-items-center custom-nav-link"
                  to={"/categories/macbooks"}
                  style={{
                    whiteSpace: "nowrap",
                  }}
                >
                  MacBooks {">"}
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  className="d-flex align-items-center custom-nav-link"
                  to={"/categories/ipads"}
                  style={{
                    whiteSpace: "nowrap",
                  }}
                >
                  iPads {">"}
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  className="d-flex align-items-center custom-nav-link"
                  to={"/categories/airpods"}
                  style={{
                    whiteSpace: "nowrap",
                  }}
                >
                  AirPods {">"}
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  className="d-flex align-items-center custom-nav-link"
                  to="/categories/iwatches"
                  style={{
                    whiteSpace: "nowrap",
                  }}
                >
                  iWatches {">"}
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  className="d-flex align-items-center custom-nav-link"
                  to={"/categories/macs"}
                  style={{
                    whiteSpace: "nowrap",
                  }}
                >
                  Macs {">"}
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  className="d-flex align-items-center custom-nav-link"
                  to={"/categories/iphones"}
                  style={{
                    whiteSpace: "nowrap",
                  }}
                >
                  iPhones {">"}
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  className="d-flex align-items-center custom-nav-link"
                  to={"/categories/imacs"}
                  style={{
                    whiteSpace: "nowrap",
                  }}
                >
                  iMacs {">"}
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  className="d-flex align-items-center custom-nav-link"
                  to={"/categories/displays"}
                  style={{
                    whiteSpace: "nowrap",
                  }}
                >
                  Displays {">"}
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  className="d-flex align-items-center custom-nav-link"
                  to={"/categories/accessories"}
                  style={{
                    whiteSpace: "nowrap",
                  }}
                >
                  Accessories {">"}
                </Nav.Link>
              </div>

              {/* Dropdown for Small Devices */}
              <div className="link-dropdown">
                <select id="nav-select" onchange="navigateToPage(this)">
                  <option value="/">Select Category</option>
                  <option value="/categories/macbooks">MacBooks</option>
                  <option value="/categories/ipads">iPads</option>
                  <option value="/categories/airpods">AirPods</option>
                  <option value="/categories/iwatches">iWatches</option>
                  <option value="/categories/macs">Macs</option>
                  <option value="/categories/iphones">iPhones</option>
                  <option value="/categories/imacs">iMacs</option>
                  <option value="/categories/displays">Displays</option>
                  <option value="/categories/accessories">Accessories</option>
                </select>
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
                      style={{ color: "lightblue", 
                        marginRight: "20px" }}
                      onClick={logout}
                    >
                      LogOut
                    </Nav.Link>
                    <Nav.Link
                      as={Link}
                      className="d-flex align-items-center custom-login"
                      to={"/account"}
                      style={{ color: "lightblue",
                         marginRight: "20px" }}
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
                      style={{ color: "red", 
                        padding: "0px", 
                        marginRight: "20px" }}

                    >
                      Login
                    </Nav.Link>
                    <Nav.Link
                      as={Link}
                      className="d-flex align-items-center custom-login"
                      to={"/register"}
                      style={{ color: "lightgreen", 
                        padding: "0px", 
                        marginRight: "20px" }}
                    >
                      Register
                    </Nav.Link>
                  </div>
                )}
              </div>
            </Nav>
          </div>
        </div>
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
