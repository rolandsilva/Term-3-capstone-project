import React from 'react'

const Footer = () => {
  return (
    <div>Footer</div>
  )
}

export default Footer

// import React from "react";
// import { Link } from "react-router-dom";
// import {
//   Navbar,
//   Nav,
//   Badge,
//   Container,
//   ToggleButtonGroup,
//   ToggleButton,
// } from "react-bootstrap";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faShoppingBag } from "@fortawesome/free-solid-svg-icons/faShoppingBag";
// import "./Header.css";
// // import { useUI, useProvideCart, useCurrency } from "../hooks";
// // import CartSidebar from "./CartSidebar";

// function Header() {
//   // const { openSidebar } = useUI();
//   // const { state } = useProvideCart();
//   // const { toggleCurrency, symbol } = useCurrency();

//   // const handleCurrencyChange = (e) => toggleCurrency();

//   return (
//     <>
//       {/* <CartSidebar /> */}
//       <Navbar expand="lg" style={{ backgroundColor: "#1D3868" }}>
//         <Container id="headercontainer">
//           <Navbar.Brand >
//             <Nav.Link  to={"/"}>
//               <div id="headerdiv1">Roland's Computers, Devices and Accessories</div>
//             </Nav.Link>
//             <Nav.Link
//                   className="d-flex align-items-center ms-1"
//                   // onClick={openSidebar}
//                   style={{
//                     color: "white",
//                     cursor: "pointer",
//                     marginRight: "20px",
//                   }}
//                 >
//                   <span>Cart</span>
//                   <FontAwesomeIcon
//                     className="ms-2 mb-1"
//                     icon={faShoppingBag}
//                     style={{ color: "white" }}
//                   />
//                   {/* {state.itemCount > 0 && (
//                   <Badge
//                     pill
//                     style={{ color: "black" }}
//                     variant="primary"
//                     className="mb-4 me-2"
//                   >
//                     <p className="mb-0">{state.itemCount}</p>
//                   </Badge>
//                 )} */}
//                 </Nav.Link>
//           </Navbar.Brand>
//           {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
//           <Navbar.Collapse id="basic-navbar-nav">
//             <Nav className="ms-auto" style={{display: "flex"}}>
//               {/* {
//                 <ToggleButtonGroup 
//                   name="currency"
//                   value={currency}
//                   onClick={handleCurrencyChange}
//                 >
//                   <ToggleButton variant="primary" value="usd">
//                     Click to change from { symbol }
//                   </ToggleButton>
//                   <ToggleButton variant="outline-primary" value="eur">
//                     EUR
//                   </ToggleButton>
//                 </ToggleButtonGroup>
//               } */}
//               <div>
//                 {/* <Nav.Link
//                   // as={Link}
//                   className="d-flex align-items-center"
//                   to={`/`}
//                   style={{ color: "white", marginRight: "20px" }}
//                 >
//                   Home Page
//                 </Nav.Link> */}
//                 <Nav.Link
//                   // as={Link}
//                   className="d-flex align-items-center"
//                   to={`/`}
//                   style={{ color: "white", marginRight: "20px" }}
//                 >
//                   DeskTops {">"}
//                 </Nav.Link>
//                 <Nav.Link
//                   // as={Link}
//                   className="d-flex align-items-center"
//                   to={`/`}
//                   style={{ color: "white", marginRight: "20px" }}
//                 >
//                   LapTops {">"}
//                 </Nav.Link>
//                 <Nav.Link
//                   // as={Link}
//                   className="d-flex align-items-center"
//                   to={`/`}
//                   style={{ color: "white", marginRight: "20px" }}
//                 >
//                   Phones {">"}
//                 </Nav.Link>
//                 <Nav.Link
//                   // as={Link}
//                   className="d-flex align-items-center"
//                   to={`/`}
//                   style={{ color: "white", marginRight: "20px" }}
//                 >
//                   Tablets {">"}
//                 </Nav.Link>
//                 <Nav.Link
//                   // as={Link}
//                   className="d-flex align-items-center"
//                   to={`/`}
//                   style={{ color: "white", marginRight: "20px" }}
//                 >
//                   Monitors {">"}
//                 </Nav.Link>
//                 <Nav.Link
//                   // as={Link}
//                   className="d-flex align-items-center"
//                   to={`/`}
//                   style={{ color: "white", marginRight: "20px" }}
//                 >
//                   Accessories {">"}
//                 </Nav.Link>
   
//               </div>
//               <div>
//               <Nav.Link
//                   // as={Link}
//                   className="d-flex align-items-center"
//                   to={`/`}
//                   style={{ color: "white", marginRight: "20px" }}
//                 >
//                   Login
//                 </Nav.Link>
//                 <Nav.Link
//                   // as={Link}
//                   className="d-flex align-items-center"
//                   to={`/`}
//                   style={{ color: "white", marginRight: "20px" }}
//                 >
//                   Register
//                 </Nav.Link>
//               </div>
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
//     </>
//   );
// }

// export default Header;




// {/* <div class="vertical-gradient">
// <h1 class="text-center">Vertical Gradient from Blue to White</h1>
// </div> */}