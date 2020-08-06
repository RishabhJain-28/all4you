import React, { Fragment } from "react";

const VendorPageDescription = () => {
  return (
    <Fragment>
      <div className="col-12 col-lg-5">
        <div
          className="card"
          style={{
            borderRadius: "10px",
            boxShadow: "-6px -6px 16px #fff, 6px 6px 16px #d1cdc7",
          }}
        >
          <div className="card-body">
            <h4 className="card-title">
              <strong>Vendor</strong>
            </h4>
            <p className="card-text" style={{ padding: "15px 5px 15px 5px" }}>
              Description of Vendor
            </p>
            <button
              className="btn btn-outline-dark"
              style={{ margin: "10px 0px 10px 0px" }}
            >
              Share
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default VendorPageDescription;
