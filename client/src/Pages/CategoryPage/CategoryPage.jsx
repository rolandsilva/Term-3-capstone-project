import React from "react";
import "./CategoryPage.css";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import api from "../../utils/api.utils";

const CategoryPage = () => {
  const { name } = useParams();

  const [category, setCategory] = useState(0);
  const [loading, setLoading] = useState(0);
  const [error, setError] = useState(0);

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
        <div className="productsearch">
          <label
            style={{
              fontSize: "25px",
              fontWeight: "bold",
              margin: "10px",
            }}
          >
            Search by Product{" "}
          </label>
          <input
            id="searchInput"
            className="form-control"
            style={{
              fontSize: "25px",
              height: "auto", // Adjust height to auto
              padding: "5px", // Adjust padding as needed
              margin: "10px",
              // margin: "10px 0",
            }}
          />
        </div>
        <div className="categorycontainer">
          <h3
            className="categorytitle"
            style={{
              fontSize: "25px",
              fontWeight: "bold",
              margin: "10px",
            }}
          >
            Category:
          </h3>
          <div className="categorytype">
            <span>{name}</span>
            {/* <span>iPads</span> */}
          </div>
          {/* </div> */}
        </div>
      </div>
      <div className="maincontainer">
        <div className="filtercontainer">
          <div>
            <h3 className="filterby">Filter by:</h3>
            <div className="filterText">
            <Link to="/category-filter-by" className="comparebutton">
              <h3 className="filterByCategory">Category</h3>
              </Link>

              <h3 className="filterByCategory">Price</h3>
              <h3 className="filterByCategory">Highest Rated</h3>
              <h3 className="filterByCategory">Most Popular</h3>
              <h3 className="filterByCategory">In Stock</h3>
              <h3 className="filterByCategory">On Sale</h3>
            </div>
            <hr className="divider" />
            {/* <h3 className="filerByLineSpace"></h3> */}
            <h3 className="filterBySpecials">Be sure to sign up for Daily Specials and Flash Sales</h3>
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
                <figure className="imagnamecontainer">
                  <img src={productItem.image_url} id="itemimage" />
                  <figcaption>{productItem.name}</figcaption>
                </figure>
              </Link>
            ))}
        </div>
        <div className="comparetrade">
          <h2> compare</h2>
          {/* <div className="categoryproductcontainer"> */}
          {/* <a href="#compare" className="comparebutton">
              <img src="/bw_devices.png" alt="Compare" className="img-fluid" />
            </a> */}
          <Link to="/compare-products-info" className="comparebutton">
            {/* <img src="/bw_devices.png" alt="Compare" className="img-fluid" /> */}
            <img src="/bw_devices.png" alt="Compare" className="compare-img" />
          </Link>
          {/* <a href="#trade" className="tradebutton">
              <img src="/tradeindevice.png" alt="Trade" className="img-fluid" />
            </a> */}
          <Link to="/trade-in-info" className="tradebutton">
            {/* <img src="/tradeindevice.png" alt="Trade" className="img-fluid" /> */}
            <img src="/tradeindevice.png" alt="Trade" className="trade-image" />
          </Link>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
