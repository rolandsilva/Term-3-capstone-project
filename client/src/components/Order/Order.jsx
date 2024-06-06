function Order({ order }) {
    const { id, orderNumber, itemNumber, itemQuantity, itemSpecifications, itemShippingTime, itemShippingDate } = order;
  
    return (
      <div className="orderContainer" key={id}>
        <h2>Order Information</h2>
        <p>Order Number: {orderNumber}</p>
        <p>Item Number: {itemNumber}</p>
        <p>Item Quantity: {itemQuantity}</p>
        <p>Item Specifications: {itemSpecifications}</p>
        <p>Item Shipping Time: {itemShippingTime}</p>
        <p>Item Shipping Date: {itemShippingDate}</p>
      </div>
    );
  }
  export default Order