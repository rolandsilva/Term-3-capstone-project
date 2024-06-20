import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import api from "../utils/api.utils";
import "./ProductPage.css";

const ProductPage = () => {
  const { id } = useParams();

  const [product, setProduct] = useState(0);
  const [loading, setLoading] = useState(0);
  const [error, setError] = useState(0);

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      try {
        const product = await api.get(`/products/${id}`);
        console.log(product);
        setProduct(product.data);
        setLoading(false);
      } catch (err) {
        console.error(err.message);
        setLoading(false);
        setError(true);
      }
    };
    getProduct();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading product</div>;
  }

  if (!product) {
    return <div>No product found</div>;
  }

  return (
    <div className="productcontainer">
      <h2>Product Page</h2>

      <div className="productNameImageContainer">
        <div className="productNameContainer">
          <div className="producttitles">
            Product Name:{" "}
            <span className="productDescription">{product.name}</span>
          </div>
          <div className="producttitles">
            Product Category:{" "}
            <span className="productDescription">{product.category}</span>
          </div>
          <div className="producttitles">
            Product Price: $
            <span className="productDescription">${product.price}</span>
          </div>
        </div>
        <div className="productImageContainer">
          <img src={product.image_url} className="imgDiv" alt={product.name} />
        </div>
      </div>
      <div className="featuresSpecificationsContainer">
        <span className="featureTitle">Product Features: </span>
        {product.features}
        <span className="featureTitle">Product Specifications: </span>
        {product.specifications}
        <span className="featureTitle">Product Availability: </span>
        {product.availability}
      </div>

      {/* <div className = "producttitles">{product.name} </div> */}
    </div>
  );
};

export default ProductPage;
