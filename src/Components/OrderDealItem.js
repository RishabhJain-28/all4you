import React, { Fragment } from "react";

const OrderDealItem = () => {
  return (
    <Fragment>
      <div className="d-flex justify-content-between">
        <div className="p-2">
          <h6 className="text-muted">
            <strong>Coupoun Name</strong>
          </h6>
        </div>
        <div className="p-2">
          <h6 className="text-muted">x1</h6>
        </div>
        <div className="p-2">
          <h6>
            <strong>Rs. 100</strong>
          </h6>
        </div>
      </div>
    </Fragment>
  );
};

export default OrderDealItem;
