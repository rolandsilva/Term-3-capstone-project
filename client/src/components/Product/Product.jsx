function Product({ product }) {
  const {
    id,
    name,
    category,
    price,
    features,
    specifications,
    availability,
    image_url,
  } = product;

  return product.map((productItem) => (
    <div className="productContainer" key={productItem.id}>
      <h2> Product Information</h2>
      <p>Product Name: {productItem.name}</p>
      <p>Category: {productItem.category}</p>
      <p>Price: {productItem.price}</p>
      <p>Features: {productItem.features}</p>
      <p>Specifications: {productItem.specifications}</p>
      <p>Availability: {productItem.availability}</p>
      <img src={productItem.image_url} alt={productItem.name} />
    </div>
  ));
}

export default Product;
