import React from "react";
import "./Homepage.css";
import { Link } from "react-router-dom";

const HomePage = () => {
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
              style={{
                display: "flex",
                backgroundColor: "lightblue",
                border: "1px solid black",
                padding: "4px",
                marginLeft: "19px",
              }}
            >
              <h2 className="searchtext">
                Search by Category (click image below)
              </h2>
              <label
                style={{
                  fontSize: "25px",
                  padding: "0px 10px",
                  fontWeight: "bold",
                }}
              >
                Search by Product{" "}
              </label>
              <input />
            </div>
            <div className="productimgcontainer">
              <Link to="/productairpods">
                <figure>
                  <img src="./airpods _1_png.png" id="airpods" />
                  <figcaption>AirPods</figcaption>
                </figure>
              </Link>
              <Link to="/productaccessories">
                <figure>
                  <img src="./airtag_single_png.png" id="airtags" />
                  <figcaption>AirTags</figcaption>
                </figure>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="newProductscontainer">
        <h2 className="newProductbar">New Products</h2>
        <img src="/M3MBP.png" alt="M3 MacBook Pro" className="M3MBPimage" />
        <p className="M3MBPname">M3 MacBook Pro</p>
      </div>
    </div>
  );
};

export default HomePage;
