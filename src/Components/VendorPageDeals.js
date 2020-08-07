import React, { Fragment } from "react";

const VendorPageDeals = () => {
  return (
    <Fragment>
      <div className="col-12 col-lg-7">
        <div
          className="row"
          style={{
            backgroundColor: "white",
            padding: "10px 5px 10px 5px",
            borderRadius: "10px",
            boxShadow: "-6px -6px 16px #fff, 6px 6px 16px #d1cdc7",
          }}
        >
          <div className="col-12 col-lg-3">
            <img
              alt="place_holder"
              src="./card.jpg"
              className="img-fluid"
              style={{ borderRadius: "10px", width: "100%" }}
            />
          </div>
          <div className="col-12 col-lg-9">
            <h5 className="text-muted">
              <strong>Deal Name</strong>
            </h5>
            <div className="row">
              <div className="col-12 col-lg-9">
                <p style={{ marginBottom: "10px" }}>Free Cancellation</p>
                <small>
                  <strong>Valid For :</strong> all |<strong>Valid On :</strong>{" "}
                  all days |<strong>Timings :</strong> all days
                </small>
              </div>
              <div className="col-12 col-lg-3">
                <div className="row">
                  <div className="col-6 col-lg-12">
                    <small>
                      <del>Rs. 100</del>
                    </small>
                    <p>
                      <strong>Rs. 20</strong>
                    </p>
                  </div>
                  <div className="col-6 col-lg-12">
                    <div className="d-flex justify-content-end">
                      <div className="p-2">
                        <button
                          className="btn btn-sm btn-primary"
                          style={{
                            backgroundColor: "purple",
                            border: "purple",
                          }}
                        >
                          -
                        </button>
                      </div>
                      <div
                        className="p-2"
                        style={{ paddingTop: "10px !important" }}
                      >
                        0
                      </div>
                      <div className="p-2">
                        <button
                          className="btn btn-sm btn-primary"
                          style={{
                            backgroundColor: "purple",
                            border: "purple",
                          }}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="dropdown-divider"></div>
            <div className="d-flex justify-content-end">
              <div className="p-2">
                <button
                  className="btn btn-primary"
                  style={{ backgroundColor: "purple", border: "0px" }}
                >
                  View Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default VendorPageDeals;
