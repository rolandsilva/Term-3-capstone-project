import React from "react";
import "./Homepage.css";
import { Link } from "react-router-dom";
// import api from "??"
import { exampleProductData } from "../exampleData";
const HomePage = () => {

  //use api call fetch data mocked with mock Data 
  console.log(exampleProductData)
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
          {exampleProductData.map(product => {
                return (<Link to={`/products/${product.id}`}>
                  <img src={product.image_url} id="macbooks" />
                  <figcaption>{product.name}</figcaption>
                </Link>)})}
          <div className="searchcontainer">
            <div
              className="searchbar"
              style={{
                display: "flex",
                backgroundColor: "lightblue",
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
              <Link to="/productmacbooks">
                <figure>
                  <img src="./M3mbpmax.png" id="macbooks" />
                  <figcaption>Apple MacBooks</figcaption>
                </figure>
              </Link>
              <Link to="/productipads">
                <figure>
                  <img src="./ipadair.png" id="ipads" />
                  <figcaption>Apple iPads</figcaption>
                </figure>
              </Link>
              <Link to="/productipods">
                <figure>
                  <img src="./airpodsmax.png" id="ipads" />
                  <figcaption>Apple iPod Pros</figcaption>
                </figure>
              </Link>
              <Link to="/productiwatches">
                <figure>
                  <img src="./iwatchultra.png" id="ipads" />
                  <figcaption>Apple iWatches</figcaption>
                </figure>
              </Link>
              <Link to="/productmacpro">
                <figure>
                  <img src="./macpro.png" id="specialItem" />
                  <figcaption>Apple Mac Pro</figcaption>
                </figure>
              </Link>
              <Link to="/productiphones">
                <figure>
                  <img src="./iphone152.png" id="ipads" />
                  <figcaption>Apple iPhone 15</figcaption>
                </figure>
              </Link>
              <Link to="/productimacs">
                <figure>
                  <img src="./imac.png" id="ipads" />
                  <figcaption>Apple iMacs</figcaption>
                </figure>
              </Link>
              <Link to="/productdisplays">
                <figure>
                  <img src="./retinadisplay.png" id="ipads" />
                  <figcaption>Apple Displays</figcaption>
                </figure>
              </Link>
              <Link to="/productaccessories">
                <figure>
                  <img src="./ipad10_1.png" id="ipads" />
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
          <p className="M3MBPname">M3 MacBook Pro</p>
          <img
            src="/ipadprom4.png"
            id="m4ipadpro"
            alt="M4 iPad Pro"
            className="M3MBPimage"
          />
          <p className="M3MBPname">M4 iPad Pro</p>
        </div>
        <div className="contactInfo">
        <h3>Call 800-123-4567</h3>
        <p className="questions">
        24/7 For any questions
        </p>
        <Link to=""><h2>click here to go to our FAQ Page</h2></Link>
        </div>

      </div>
    </div>
  );
};

export default HomePage;
