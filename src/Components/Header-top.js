import React from "react";

const HeaderTop = () => {
  return (
    <div className="top-part">
      <div className="container">
        <div className="city-select">
          <div href="/" className="display-block city-select-div">
            <div className="text-group">
              <div style={{ marginRight: 10 }}>
                <i className="fa fa-map-marker" aria-hidden="true"></i>
              </div>
              <div className="text-group-content">
                <p className="location">
                  <span>Select Location</span>
                  <span className="city-name">
                    Mumbai
                    <i className="fa fa-caret-down" aria-hidden="true"></i>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <ul className="top-right fr">
          <li>
            <a
              data-toggle="modal"
              href="https://all4you.co.in/#how-it-works"
              className=""
            >
              How it Works
            </a>
          </li>
          <li>
            <a href="https://all4you.co.in/#" className="">
              Connceted with us
            </a>
          </li>

          <li>
            <a data-toggle="modal" href="https://all4you.co.in/#Login-Register">
              Login / Sign Up
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderTop;
