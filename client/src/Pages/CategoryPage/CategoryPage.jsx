import React from "react";
import "./CategoryPage.css";
import { Link } from "react-router-dom";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import api from "../../utils/api.utils";

const CategoryPage = () => {
  const { name } = useParams();

  const [category, setCategory] = useState(0);
  const [loading, setLoading] = useState(0);
  const [error, setError] = useState(0);

  const [categoryItem, setCategoryItem] = useState(0);
  const [allProducts, setAllProducts] = useState(0);
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

  useEffect(() => {
    const getCategory = async () => {
      setLoading(true);
      try {
        const category = await api.get(`/products/categories/${name}`);
        console.log(category);
        setCategory(category.data);
        setLoading(false);
      } catch (err) {
        console.error(err.message);
        setLoading(false);
        setError(true);
      }
    };
    getCategory();
  }, [name]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading category</div>;
  }

  if (!category) {
    return <div>No category found</div>;
  }

  return (
    <div>
      <div className="categoryheader">
        <div className="cpsearchcontainer">
          <div className="cpsearchbar">
            <h3 className="cpsearchtext">
              Search by Category (click image below)
            </h3>
            <div className="cpsearchInputContainer">
              <label className="cpsearchLabel">Select by </label>
              {/* <input id="searchInput" onChange={handleSearch} /> */}
              <select
                id="cpsearchInput"
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

              <label className="cpsearchLabel"> </label>
              {/* <input id="searchInput" onChange={handleSearch} /> */}
              <select
                id="cpsearchInput"
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
        </div>
      </div>
      <div className="maincontainer">
        <div className="filtercontainer">
          <div>
            <h3 className="filterby">Filter by:</h3>
            <div className="filterText">
              {/* <Link to="/category-filter-by" className="comparelink">
                <h3 className="filterByCategory">Category</h3>
              </Link> */}

              <Link to="/category-filter-by" className="comparelink">
                <h3 className="filterByCategory">Price</h3>
              </Link>

              <Link to="/category-filter-by" className="comparelink">
                <h3 className="filterByCategory">Highest Rated</h3>
              </Link>

              <Link to="/category-filter-by" className="comparelink">
                <h3 className="filterByCategory">Most Popular</h3>
              </Link>

              <Link to="/category-filter-by" className="comparelink">
                <h3 className="filterByCategory">In Stock</h3>
              </Link>

              <Link to="/category-filter-by" className="comparelink">
                <h3 className="filterByCategory">On Sale</h3>
              </Link>
              {/* <h3 className="filterByCategory">Price</h3>
              <h3 className="filterByCategory">In Stock</h3>
              <h3 className="filterByCategory">On Sale</h3> */}
            </div>
            {/* <hr className="divider" /> */}
            <div className="line"></div>
            {/* <h3 className="filerByLineSpace"></h3> */}
            <h3 className="filterBySpecials">
              Be sure to sign up for Daily Specials and Flash Sales
            </h3>
          </div>
          <div className="chat">
            <p>Any Questions ?</p>
            <Link to="/chat">Click here to chat</Link>
          </div>
        </div>
        <div className="categoryproductcontainer">
          {category &&
            category.map((productItem) => (
              <Link to={`/product/${productItem.id}`}>
                <div className="testdiv">
                  <figure className="imagenamecontainer">
                    <img src={productItem.image_url} id="itemimage" />
                    <figcaption>{productItem.name}</figcaption>
                  </figure>
                </div>
              </Link>
            ))}
        </div>
        <div className="comparetrade">
          <h2> Compare</h2>
          {/* <div className="categoryproductcontainer"> */}
          {/* <a href="#compare" className="comparebutton">
              <img src="/bw_devices.png" alt="Compare" className="img-fluid" />
            </a> */}
          <Link to="/compare-products-info" className="comparebutton">
            {/* <img src="/bw_devices.png" alt="Compare" className="img-fluid" /> */}
            <img src="/bw_devices.png" alt="Compare" className="compare-img" />
          </Link>

          <Link to="/trade-in-info" className="tradebutton">
            <img src="/tradeindevice.png" alt="Trade" className="trade-image" />
          </Link>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
