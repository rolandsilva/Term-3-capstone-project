import React from "react";
import "./CategoryPage.css";
import { Link } from "react-router-dom";

const CategoryPage = () => {
  return (
    <div>
      <div className="categoryheader">
        <div className="productsearch">
          <label
            style={{
              fontSize: "18px",
              fontWeight: "bold",
            }}
          >
            Search by Product{" "}
          </label>
          <input id="searchInput" />
        </div>
        <div className="categorytype">
          <h3>Category: test</h3>
        </div>
      </div>
      <div className="maincontainer">
        <div className="filtercontainer">
          <div>
          <h3 className="filterby">Filter by:</h3>
          <h3>Category</h3>
          <h3>Price</h3>
          <h3>Highest Rated</h3>
          <h3>Most Popular</h3>
          <h3>In Stock</h3>
          <h3>On Sale</h3>
          </div>
          <div className="chat">
            <h3>Any Questions ?</h3>
            <Link to="/chat">Click here to chat</Link>
          </div>
  
        </div>
        <div className="productcontainer">
          <Link to="/productairpods">
            <figure>
              <img src="./M3mbpmax.png" id="macbooks" />
              <figcaption>Apple MacBooks</figcaption>
            </figure>
          </Link>
          <Link to="/productaccessories">
            <figure>
              <img src="./ipad10_1.png" id="ipads" />
              <figcaption>Apple iPads</figcaption>
            </figure>
          </Link>
          <Link to="/productaccessories">
            <figure>
              <img src="./ipad10_1.png" id="ipads" />
              <figcaption>Apple iPads</figcaption>
            </figure>
          </Link>
          <Link to="/productaccessories">
            <figure>
              <img src="./ipad10_1.png" id="ipads" />
              <figcaption>Apple iPads</figcaption>
            </figure>
          </Link>
          <Link to="/productaccessories">
            <figure>
              <img src="./macpro.png" id="specialItem" />
              <figcaption>Apple Mac Pro</figcaption>
            </figure>
          </Link>
          <Link to="/productaccessories">
            <figure>
              <img src="./ipad10_1.png" id="ipads" />
              <figcaption>Apple iPads</figcaption>
            </figure>
          </Link>
          <Link to="/productaccessories">
            <figure>
              <img src="./ipad10_1.png" id="ipads" />
              <figcaption>Apple iPads</figcaption>
            </figure>
          </Link>
          <Link to="/productaccessories">
            <figure>
              <img src="./ipad10_1.png" id="ipads" />
              <figcaption>Apple iPads</figcaption>
            </figure>
          </Link>
          <Link to="/productaccessories">
            <figure>
              <img src="./ipad10_1.png" id="ipads" />
              <figcaption>Apple iPads</figcaption>
            </figure>
          </Link>
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
