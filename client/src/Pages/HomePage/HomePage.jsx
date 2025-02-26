import React, { useState, useEffect } from "react";
import "./Homepage.css";
import { Link } from "react-router-dom";
import api from "../../utils/api.utils";
import { exampleProductData } from "../../exampleData";
import { useNavigate } from "react-router-dom";
const HomePage = () => {
  const [categoryItem, setCategoryItem] = useState(0);
  const [allProducts, setAllProducts] = useState(0);
  const [loading, setLoading] = useState(0);
  const [error, setError] = useState(0);
  const [searchParameter, setSearchParameter] = useState(null);
  const navigate = useNavigate();

  const options = ["product-Name", "product-Model"];
  const [selectBy, setSelectBy] = useState("");
  // const [selectedProduct, setSelectedProduct] = useState("");
  const [filterProduct, setFilterProducts] = useState("");
  const [selectedProductModel, setSelectedProductModel] = useState("");

  const handleSelectByChange = (event) => {
    setSelectBy((prevState) => event.target.value);
    console.log(event.target.value);
    console.log(selectBy);
  };

  const handleSelectChangeModel = (event) => {
    setSelectedProductModel(event.target.value);
    console.log(event.target.value);
    if (selectBy === "product-Category") {
      const productModelMatched = categoryItem.filter(
        (product) => product.category === event.target.value
      );
      navigate(`/categories/${productModelMatched[0].category}`);
    } else {
      const productModelMatched = allProducts.filter(
        (product) =>
          product.productNbr === event.target.value ||
          product.name === event.target.value
      );
      console.log(productModelMatched);
      navigate(`/product/${productModelMatched[0].id}`);
    }
  };

  useEffect(() => {
    if (selectBy === "product-Category") {
      setFilterProducts(
        categoryItem.map((products) => {
          return products.category;
        })
      );
    } else if (selectBy === "product-Name") {
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
  console.log(filterProduct);

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

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
    <div id="maincontainer">
      {/* <div className="imagescontainer"> */}
      <div className="homecontainer">
        <div className="featuredproductcontainer">
          <h2 className="featuredproductbar">Featured Products</h2>
          <div className="allitemscontainer">
            <div className="featureditemcontainer">
              <Link to={`/product/1113`}>
                <img
                  src="/M3MBP.png"
                  id="itemimage"
                  alt="M3 MacBook Pro"
                  // className="M3MBPimage"
                />
                <p className="itemName">M4 MacBook Max</p>
              </Link>
            </div>
            <div className="featureditemcontainer">
              <Link to={`/product/1130`}>
                <img
                  src="/iwatchultra.png"
                  id="itemimage"
                  alt="M3 MacBook Pro"
                  // className="M3MBPimage"
                />
                <p className="itemName">iWatch Ultra 2</p>
              </Link>
            </div>
            <div className="featureditemcontainer">
              <Link to={`/product/1133`}>
                <img
                  src="/airpods_2.png"
                  id="itemimage"
                  alt="Air Pods Pro 2nd gen"
                  // className="M3MBPimage"
                />
                <p className="itemName">Air Pods Pro 2nd Gen</p>
              </Link>
            </div>
            <div className="featureditemcontainer">
              <Link to={`/product/1127`}>
                <img
                  src="/ipadProM4.png"
                  id="itemimage"
                  // alt="M4 iPad Pro"
                  // className="M3MBPimage"
                />
                <p className="itemName">M4 iPad Pro</p>
              </Link>
            </div>
          </div>
        </div>

        <div className="searchcategorycontainer">
          <div className="searchbarcontainer">
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
                <option value="">category,name,model</option>
                <option value="product-Category">category</option>
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
          <div className="categoryimgcontainer">
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
      {/* </div> */}
      <div className="rightColumn">
        <div className="newProductscontainer">
          <div>
            <h2 className="newProductbar">New Products</h2>
          </div>
          <div className="newproductslinks">
            <Link to={`/product/1113`}>
              <img
                src="/M3MBP.png"
                id="m3mbp"
                alt="M3 MacBook Pro"
                className="M3MBPimage"
              />
              <p className="itemName">M3 MacBook Pro</p>
            </Link>
            <Link to={`/product/1127`}>
              <img
                src="/ipadProM4.png"
                id="m4ipadpro"
                alt="M4 iPad Pro"
                className="M3MBPimage"
              />
              <p className="itemName">M4 iPad Pro</p>
            </Link>
          </div>
        </div>

        <div className="contactInfo">
          <h3 className="homepageh3">Call 800-123-4567</h3>
          <p className="questions">24/7 For any questions</p>
          <Link to="/FAQ">
            <p className="homepagep">click here for our FAQ Page</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
