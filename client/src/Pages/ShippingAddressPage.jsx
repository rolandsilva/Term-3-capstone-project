import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

const states = [
  "Alabama",
  "Alaska",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "Florida",
  "Georgia",
  "Hawaii",
  "Idaho",
  "Illinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "New York",
  "North Carolina",
  "North Dakota",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Pennsylvania",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Vermont",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wisconsin",
  "Wyoming",
];

const ShippingAddress = ({
  handleInputChange,
  data,
  handlePlaceOrder,
}) => {
  return (
    // <div>ShippingAddress</div>

    <div
      className="shippingaddresscontainer"
      style={{ maxWidth: "960px" }}
    >
      <form
        className="needs-validation"
        noValidate
        onSubmit={handlePlaceOrder}
      >
        <h4 className="mb-3">Shipping Address</h4>
        <div className="row">
          <div className="col-md-6 mb-3">
            <label htmlFor="firstName">First name</label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              name="shippingFirstName"
              placeholder=""
              required
              value={data.shippingFirstName}
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
              name="shippingLastName"
              placeholder=""
              required
              value={data.shippingLastName}
              onChange={handleInputChange}
            />
            <div className="invalid-feedback">
              Valid last name is required.
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 mb-3">
            <label htmlFor="Phone">
              Shipping Phone{" "}
              <span className="text-muted">(optional)</span>
            </label>
            <input
              type="phone"
              className="form-control"
              id="email"
              name="shippingContactPhoneNumber"
              placeholder="111-222-3333"
              value={data.shippingContactPhoneNumber}
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
              name="shippingAddress1"
              placeholder="1234 Main St"
              required
              value={data.shippingAddress1}
              onChange={handleInputChange}
            />
            <div className="invalid-feedback">
              Please enter your shipping address.
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <label htmlFor="City">
              City <span></span>
            </label>
            <input
              type="text"
              className="form-control"
              id="city"
              name="shippingCity"
              placeholder="Choose"
              value={data.shippingCity}
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
              name="country"
              required
              value={data.country}
              onChange={handleInputChange}
            >
              <option value="">Choose...</option>
              <option>United States</option>
              <option>...other</option>
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
              name="state"
              required
              value={data.shippingState}
              onChange={handleInputChange}
            >
              <option value="">Choose...</option>
              {states.map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
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
              name="shippingZipCode"
              placeholder=""
              required
              value={data.shippingZipCode}
              onChange={handleInputChange}
            />
            <div className="invalid-feedback">Zip code required.</div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ShippingAddress;
