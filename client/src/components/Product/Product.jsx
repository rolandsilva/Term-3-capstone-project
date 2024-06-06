function Product({ product }) {
    const { id, name, category, price, features, specifications, availability, image_url } = product;
  
    return (
      <div className="productContainer" key={id}>
              <h2> Product Information</h2>
        <p>Product Name: {name}</p>
        <p>Category: {category}</p>
        <p>Price: {price}</p>
        <p>Features: {features}</p>
        <p>Specifications: {specifications}</p>
        <p>Availability: {availability}</p>
        <img src={image_url} alt={name} />
      </div>
    );
  }

export default Product