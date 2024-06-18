import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import api from "../utils/api.utils";
import "./ProductPage.css"

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

  return (
    <div className="productcontainer">
      <h2>Product Page</h2>
      <div><span className = "producttitles">Product Name: </span>{product.name}</div>
      <div><span className = "producttitles">Product Category: </span>{product.category}</div>
      <div><span className = "producttitles">Product Price: </span>{product.price}</div>
      <div><span className = "producttitles">Product Features: </span>{product.features}</div>
      <div><span className = "producttitles">Product Specifications: </span>{product.specifications}</div>
      <div><span className = "producttitles">Product Availability: </span>{product.availability}</div>
      <div><span className = "producttitles">Product Image: </span>{product.image_url}</div>
    </div>
  );
};

export default ProductPage;
