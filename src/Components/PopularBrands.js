import React from "react";

const PopularBrands = () => {
  return (
    <div className="container py-3">
      <h1 className="text-center mb-3" id="mainhomehead">
        Popular Brands on All for you
      </h1>
      <br />
      <div className="row">
        <div className="container" id="gridcontainer">
          <div className="row">
            <div className="col-sm-4">
              <div
                className="card"
                id="first_grid"
                style={{ width: "100%", marginTop: 20 }}
              >
                <a href="https://all4you.co.in/details/jagadish">
                  <img
                    className="card-img-top"
                    src="./All For U_files/bbq_2020_07_10_21_56.jpg"
                    alt="Card image cap"
                  />
                </a>
                <div className="card-body text-center">
                  <a href="https://all4you.co.in/details/jagadish"></a>
                  <a href="https://all4you.co.in/details/jagadish">
                    <h3 className="hptitle">Barbeque Nation</h3>
                  </a>
                  <h4 className="hptitle">123</h4>

                  <div className="starsdiv">
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star"></span>
                    <span className="fa fa-star"></span>
                  </div>

                  <p>1 months 1 days 13 hours</p>

                  <span className="pricebg">
                    <strike>
                      <i className="fa fa-inr" aria-hidden="true"></i>
                      10
                    </strike>
                  </span>
                  <span className="offerprice">
                    <span className="discount">90</span>% Off
                  </span>
                  <span className="offerprice" style={{ color: "purple" }}>
                    <i className="fa fa-inr"> 1</i>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-sm-4"></div>
          </div>
        </div>
      </div>
      <div className="text-center">
        <br />
        <a href="https://all4you.co.in/category/all" className="viewallbutton">
          <button
            type="button"
            id="viewallbuttonbg"
            className="btn  "
            style={{ backgroundColor: "purple", color: "white" }}
          >
            View All
          </button>
        </a>
        <br />
        <br />
      </div>
    </div>
  );
};

export default PopularBrands;
