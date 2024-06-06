function StockAlerts({ stockAlerts }) {
    const { id, productId, userId, email } = stockAlerts;
  
    return (
      <div className="stockAlertContainer" key={id}>
        <h2>Stock Alert Information</h2>
        <p>Product Id: {productId}</p>
        <p>UserID: {userId}</p>
        <p>Email: {email}</p>
      </div>
    );
  }

  export default StockAlerts