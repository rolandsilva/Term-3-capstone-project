function Customer({ customer }) {
  const {
    id,
    customerFirstName,
    customerLastName,
    passwordHash,
    customerEmail,
    customerAddress1,
    customerAddress2,
    customerCity,
    customerState,
    customerZipCode,
    customerPhone,
    customerPassword,
  } = customer;

  return (
    <div className="customerContainer" key={id}>
      <h2> Customer Information</h2>
      <p>Customer Name
        : {customerFirstName} {customerLastName}</p>
      <p>Password Hash: {passwordHash}</p>
      <p>Customer Email: {customerEmail}</p>
      <p>Customer Address 1: {customerAddress1}</p>
      <p>Customer Address 2: {customerAddress2}</p>
      <p>Customer City: {customerCity}</p>
      <p>Customer State: {customerState}</p>
      <p>Customer Zip Code: {customerZipCode}</p>
      <p>Customer Phone: {customerPhone}</p>
      <p>Customer Password: {customerPassword}</p>
    </div>
  );
}

export default Customer;
