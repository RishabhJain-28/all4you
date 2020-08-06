import React, { Fragment } from "react";
import OrderDealItem from "./OrderDealItem";

const VendorPageOrders = () => {
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
            <h5 className="card-title text-center">
              <strong>Your Order</strong>
            </h5>
            <div style={{ marginTop: "15px" }}>
              <OrderDealItem />
            </div>
            <div className="dropdown-divider"></div>
            <p className="card-text" style={{ padding: "5px 5px 0px 5px" }}>
              Total Amount: Rs 100
            </p>
            <button
              className="btn btn-primary"
              style={{
                margin: "5px 0px 5px 0px",
                borderRadius: "0px",
                borderColor: "purple",
                backgroundColor: "purple",
              }}
            >
              Proceed To Checkout
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default VendorPageOrders;
