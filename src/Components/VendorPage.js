import React, { Fragment } from "react";
import VendorPageCarousel from "./VendorPageCarousel";
import VendorPageDescription from "./VendorPageDescription";
import VendorPageOrders from "./VendorPageOrders";
import VendorPageDeals from "./VendorPageDeals";

const VendorPage = () => {
  return (
    <Fragment>
      <div className="row">
        <VendorPageCarousel />
        <VendorPageDescription />
      </div>

      <div className="row" style={{ marginTop: "50px" }}>
        <VendorPageDeals />
        <VendorPageOrders />
      </div>
    </Fragment>
  );
};

export default VendorPage;
