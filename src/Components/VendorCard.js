import React, { Fragment } from "react";

const VendorCard = () => {
  return (
    <Fragment>
      <div className="col-12 col-lg-4">
        <div
          className="card"
          style={{
            borderRadius: "10px",
            boxShadow: "-6px -6px 16px #fff, 6px 6px 16px #d1cdc7",
          }}
        >
          <img
            src="https://picsum.photos/294/176.jpg"
            alt="placeholder_image"
            style={{
              borderTopLeftRadius: "10px",
              borderTopRightRadius: "10px",
            }}
          />
          <div className="card-body" style={{ padding: "8px" }}>
            <div className="card-title">
              <h5 style={{ marginBottom: "2px" }}>
                <strong> Name Of Deal </strong>
              </h5>
              <p className="text-muted">Location</p>
            </div>
            <div className="dropdown-divider"></div>
            <div className="card-text">
              <div className="row">
                <div className="col-8">
                  <small className="text-muted" style={{ marginBottom: "2px" }}>
                    <del>Rs. 100</del>
                  </small>
                  <h5 style={{ color: "green" }}>Rs. 20</h5>
                </div>
                <div className="col-4">
                  <div
                    className="badge badge-primary text-wrap"
                    style={{ marginTop: "12px" }}
                  >
                    100% OFF
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default VendorCard;
