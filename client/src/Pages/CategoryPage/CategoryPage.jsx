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
          <input id="searchInput"         className="form-control"
        style={{
          fontSize: '25px',
          height: 'auto', // Adjust height to auto
          padding: '5px', // Adjust padding as needed
          margin: "10px",
          // margin: "10px 0",
        }}/>
        </div>
        <div className="categorytype">
          <h3           style={{
              fontSize: "25px",
              fontWeight: "bold",
              margin: "10px",
            }}>
            Category: <span>iPhones</span>
          </h3>
          {/* add span with name of category) */}
        </div>
      </div>
      <div className="maincontainer">
        <div className="filtercontainer">
          <div>
            <h3 className="filterby">Filter by:</h3>
            <div classname="filterText">
              <h3 className="filterByCategory">Category</h3>
              <h3>Price</h3>
              <h3>Highest Rated</h3>
              <h3>Most Popular</h3>
              <h3>In Stock</h3>
              <h3>On Sale</h3>
            </div>
            <hr className="divider" />
            {/* <h3 className="filerByLineSpace"></h3> */}
            <h3>Be sure to sign up for Daily Specials and Flash Sales</h3>
          </div>
          <div className="chat">
            <h3>Any Questions ?</h3>
            <Link to="/chat">Click here to chat</Link>
          </div>
        </div>
        <div className="categoryproductcontainer">
          {category && category.map((productItem) => ( 
                    <Link to={`/product/${productItem.id}`}>
                    <figure>
                      <img src={productItem.image_url} id="iPhone15" />
                      <figcaption>{productItem.name}</figcaption>
                    </figure>
                  </Link>
          ))}
          {/* <Link to="/productiPhones">
            <figure>
              <img src="./iphones15.png" id="iPhone15" />
              <figcaption>iPhone 15</figcaption>
            </figure>
          </Link> */}



          {/* <Link to="/productiPhones">
            <figure>
              <img src="./iphones15.png" id="iPhone15" />
              <figcaption>iPhone 15</figcaption>
            </figure>
          </Link>
          <Link to="/productiphones">
            <figure>
              <img src="./iphone15plus.png" id="iPhone15plus" />
              <figcaption>iPhone 15 Plus</figcaption>
            </figure>
          </Link>
          <Link to="/productiphones">
            <figure>
              <img src="./iphone15pro.png" id="ipads" />
              <figcaption>iPhone 15 Pro</figcaption>
            </figure>
          </Link>
          <Link to="/productiphones">
            <figure>
              <img src="./iphone15promax2.png" id="ipads" />
              <figcaption>iPhone Pro Max</figcaption>
            </figure>
          </Link> */}
   
          
        </div>
        <div className="comparetrade">
          <h2> compare</h2>
          <h2> trade</h2>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
