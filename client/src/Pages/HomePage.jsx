import React from "react";
import "./Homepage.css";

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
            <div style={{display: "flex", backgroundColor:"lightblue", border:"1px solid black", padding:"4px", marginLeft:"30px"}}>
              <h2 className="searchtext">
                Search by Category (click image below)
              </h2>
              <label style={{fontSize:"25px", padding:"0px 10px", fontWeight:"bold"}}>Search by Product </label>
              <input />
            </div>
            <div className="productimgcontainer">
            <img src="./airpods _1_png.png" id="airpods"/>
            <img src="./airtag_single_png.png" id="airtags"/>
            </div>
          </div>
        </div>
      </div>
      test
    </div>
  );
};

export default HomePage;
