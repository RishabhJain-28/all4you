import React from "react";
import logo from "../assets/logo.png";
import { Button } from "react-bootstrap";
const HeaderLocation = ({ setShowChangeLocation }) => {
  return (
    <>
      <div
        classNameName="city-selector"
        style={{ display: "block", background: "white" }}
      >
        <div classNameName="overlay">
          <div classNameName="search-body">
            <div className="search">
              <div className="container">
                <Button
                  variant="light"
                  className="close-btn fr"
                  onClick={() => setShowChangeLocation(false)}
                >
                  <span className="close-icon" style={{ display: "block" }}>
                    <i className="fa fa-times" aria-hidden="true " />
                  </span>
                  <p></p>
                </Button>
                <br />
                <p className="popup-hd text-center">Pick a City</p>
                <p className="popup-sh text-center">
                  To find awesome offers around you
                </p>
                <div className="searchbox ui search_city">
                  <div className="search-input">
                    <label htmlFor="location">
                      <i
                        className="fa fa-map-marker"
                        aria-hidden="true"
                        // style={{ display: "inline" }}
                      />
                    </label>
                    <input
                      id="location"
                      // style={{ display: "inline" }}
                      className="form-control prompt"
                      name=""
                      value=""
                      placeholder="Enter your city name"
                      type="search"
                      autocomplete="off"
                    />
                  </div>
                  <div className="results"></div>
                </div>
                <h6 className="text-center" style={{ marginTop: "20px" }}>
                  Top Cities
                </h6>
                <div className="text-center" style={{ marginTop: "20px" }}>
                  <a
                    className="search-tags"
                    href="#"
                    data-id="1"
                    data-title="Mumbai"
                    style={{
                      border: " 1px solid grey",
                      borderRadius: "25px",
                      padding: "10px",
                      color: "grey",
                      textDecoration: "none",
                    }}
                    onMouseOver={(e) => {
                      e.target.style.color = "purple";
                      e.target.style.border = "1px solid purple";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.color = "grey";
                      e.target.style.border = "1px solid grey";
                    }}
                  >
                    Mumbai
                  </a>{" "}
                </div>
                <div className="city-footer">
                  <img
                    alt="All For You"
                    className="img-responsive"
                    src={logo}
                  />
                  <p>Experience the world around you.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderLocation;
