import React, { useState, useEffect } from "react";
import "./Homepage.css";
import { Link } from "react-router-dom";
import api from "../utils/api.utils";
import { exampleProductData } from "../exampleData";
import { useNavigate } from "react-router-dom";
const HomePage = () => {
  const [categoryItem, setCategoryItem] = useState(0);
  const [allProducts, setAllProducts] = useState(0);
  const [loading, setLoading] = useState(0);
  const [error, setError] = useState(0);
  const [searchParameter, setSearchParameter] = useState(null);
  const navigate = useNavigate();

  // ****** create arrays for datalist
  // check search parameter
  // if === item in prodNameArray go to product detail page
  // else if item in prodNbrArray go ot product detail page
  // else if item in prodCategoryArray go to product category page
  // else return message not valid name, nbr or category

  //display to product page with search by parameter

  const prodNameArray = [
    "2024 M4 MacBook Pro Laptop",
    "2024 Mac Mini",
    "2024 Pro Display XDE",
    "iPad Pro",
  ];

  const prodNbrArray = [];
  const prodCategoryArray = [];

  const initialSearchParameter = {
    searchInput: "",
  };

  // const handleSearch = (e) => {
  //   const { id, value } = e.target;
  //   setSearchParameter((prev) => ({
  //     ...prev,
  //     [id]: value,
  //   }));
  // };
  const options = ["product-Name", "product-Model"];
  const [selectBy, setSelectBy] = useState("");
  // const [selectedProduct, setSelectedProduct] = useState("");
  const [filterProduct, setFilterProducts] = useState("");
  const [selectedProductModel, setSelectedProductModel] = useState("");

  const handleSelectByChange = (event) => {
    setSelectBy((prevState) => event.target.value);
    console.log(event.target.value);
    console.log(selectBy);
    //   if (selectBy === "product-Name") {
    //     setFilterProducts(allProducts.map((products) => {
    //       return products.name
    //     }))
    //   }
    //  else if (selectBy === "product-Model") {
    //     setFilterProducts(allProducts.map((products) => {
    //       return products.productNbr
    //     }))
    //  }
    //  elses
    //  setFilterProducts([])
    //   console.log(filterProduct)
    // const productMatched = allProducts.filter(
    //   (product) => product.name === event.target.value
    // );
    // console.log(productMatched);
    // navigate(`/product/${productMatched[0].id}`);
  };

  const handleSelectChangeModel = (event) => {
    setSelectedProductModel(event.target.value);
    console.log(event.target.value);
    const productModelMatched = allProducts.filter(
      (product) =>
        product.productNbr === event.target.value ||
        product.name === event.target.value
    );
    console.log(productModelMatched);
    navigate(`/product/${productModelMatched[0].id}`);
  };

  useEffect(() => {
    if (selectBy === "product-Name") {
      setFilterProducts(
        allProducts.map((products) => {
          return products.name;
        })
      );
    } else if (selectBy === "product-Model") {
      setFilterProducts(
        allProducts.map((products) => {
          return products.productNbr;
        })
      );
    } else setFilterProducts([]);
    console.log(filterProduct);
  }, [selectBy]);

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      try {
        const products = await api.get(`/products/categoryItem`);
        const allProducts = await api.get(`/products/`);
        setAllProducts(allProducts.data);
        console.log(allProducts);
        console.log(products);
        setCategoryItem(products.data);
        setLoading(false);
      } catch (err) {
        console.error(err.message);
        setLoading(false);
        setError(true);
      }
    };
    getProducts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  //use api call fetch data mocked with mock Data
  // console.log(exampleProductData);
  // fetch data from backend.

  // use backend to fetch data from database.
  // console.log(searchParameter);
  return (
    <div className="maincontainer">
      <div className="imagescontainer">
        <div className="homecontainer">
          <div className="featurescontainer">
            <img
              src="./homepagefeaturedbox 72dpi.png"
              className="featuredimg"
            />
          </div>

          <div className="searchcontainer">
            <div
              className="searchbar"
            >
              <h3 className="searchtext">
                Search by Category (click image below)
              </h3>
              <div className="searchInputContainer">
                <label className="searchLabel">Select by </label>
                {/* <input id="searchInput" onChange={handleSearch} /> */}
                <select
                  id="searchInput"
                  name="selectBy"
                  value={selectBy}
                  onChange={handleSelectByChange}
                >
                  <option value="">name or model</option>
                  <option value="product-Name">name</option>
                  <option value="product-Model">model</option>

                  {/* {allProducts &&
                    options.map((options, index) => (
                      <option key={index} value={options}>
                        {options}
                      </option>
                    ))} */}
                </select>

                <label className="searchLabel"> </label>
                {/* <input id="searchInput" onChange={handleSearch} /> */}
                <select
                  id="searchInput"
                  name="product"
                  value={selectedProductModel}
                  onChange={handleSelectChangeModel}
                >
                  {/* <ProductPage to'"x" product="product"} */}

                  <option value="">pick one</option>

                  {filterProduct &&
                    filterProduct.map((product, index) => (
                      <option key={index} value={product}>
                        {product}
                      </option>
                    ))}
                </select>

                {/* <input type="submit" /> */}
              </div>
            </div>
            <div className="productimgcontainer">
              {categoryItem &&
                categoryItem.map((product) => {
                  return (
                    <Link
                      key={product.category}
                      to={`/categories/${product.category}`}
                    >
                      <img src={product.image_url} id="macbooks" />
                      <figcaption>{product.category}</figcaption>
                    </Link>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
      <div className="rightColumn">
        <div className="newProductscontainer">
          <h2 className="newProductbar">New Products</h2>
          <img
            src="/M3MBP.png"
            id="m3mbp"
            alt="M3 MacBook Pro"
            className="M3MBPimage"
          />
          <p className="itemName">M3 MacBook Pro</p>
          <img
            src="/ipadProM4.png"
            id="m4ipadpro"
            alt="M4 iPad Pro"
            className="M3MBPimage"
          />
          <p className="itemName">M4 iPad Pro</p>
        </div>
        <div className="contactInfo">
          <h3>Call 800-123-4567</h3>
          <p className="questions">24/7 For any questions</p>
          <Link to="/FAQ">
            <h4>click here to go to our FAQ Page</h4>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
