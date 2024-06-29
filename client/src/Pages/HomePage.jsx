import React, { useState, useEffect } from "react";
import "./Homepage.css";
import { Link } from "react-router-dom";
import api from "../utils/api.utils";
import { exampleProductData } from "../exampleData";
const HomePage = () => {
  const [products, setProducts] = useState(0);
  const [loading, setLoading] = useState(0);
  const [error, setError] = useState(0);

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      try {
        const products = await api.get(`/products/`);
        console.log(products);
        setProducts(products.data);
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
          {/* {exampleProductData.map(product => {
                return (<Link to={`/products/${product.id}`}>
                  <img src={product.image_url} id="macbooks" />
                  <figcaption>{product.name}</figcaption>
                </Link>)})} */}
          <div className="searchcontainer">
            <div
              className="searchbar"
              style={{
                display: "flex",
                backgroundColor: "#c1c8dc",
                border: "1px solid black",
                padding: "4px",
                marginLeft: "19px",
              }}
            >
              <h3 className="searchtext">
                Search by Category (click image below)
              </h3>
              <div>
                <label
                  style={{
                    fontSize: "18px",
                    padding: "0px 10px 0px 70px",
                    fontWeight: "bold",
                  }}
                >
                  Search by Product{" "}
                </label>
                <input id="searchInput" />
              </div>
            </div>
            <div className="productimgcontainer">
              <Link to="/categories/macbooks">
                <figure>
                  <img src="./M3mbpmax.png" />
                  <figcaption>Apple MacBooks</figcaption>
                </figure>
              </Link>
              <Link to="/categories/ipads">
                <figure>
                  <img src="./ipadair.png" />
                  <figcaption>Apple iPads</figcaption>
                </figure>
              </Link>
              <Link to="/categories/airpods">
                <figure>
                  <img src="./airpodsmax.png" />
                  <figcaption>Apple Air Pod</figcaption>
                </figure>
              </Link>
              <Link to="/categories/iwatches">
                <figure>
                  <img src="./iwatchultra.png" />
                  <figcaption>Apple iWatches</figcaption>
                </figure>
              </Link>
              <Link to="/categories/macs">
                <figure>
                  <img src="./macpro.png" id="specialItem" />
                  <figcaption>Apple Macs</figcaption>
                </figure>
              </Link>
              <Link to="/categories/iphones">
                <figure>
                  <img src="./iphone152.png" id="ipads" />
                  <figcaption>Apple iPhone 15</figcaption>
                </figure>
              </Link>
              <Link to="/categories/imacs">
                <figure>
                  <img src="./imac.png" />
                  <figcaption>Apple iMacs</figcaption>
                </figure>
              </Link>
              <Link to="/categories/displays">
                <figure>
                  <img src="./retinadisplay.png" />
                  <figcaption>Apple Displays</figcaption>
                </figure>
              </Link>
              <Link to="/categories/accessories">
                <figure>
                  <img src="./accessories_120dpi.png" />
                  <figcaption>Apple Accessories</figcaption>
                </figure>
              </Link>
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
