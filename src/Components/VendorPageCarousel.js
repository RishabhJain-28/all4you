import React, { Fragment } from "react";

const VendorPageCarousel = () => {
  return (
    <Fragment>
      <div className="col-12 col-lg-7">
        <div id="vendorImgs" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="./carousel.jpg"
                alt="First slide"
                className="img-fluid"
                style={{ borderRadius: "10px", width: "100%" }}
              />
            </div>
            <div className="carousel-item">
              <img
                src="./carousel.jpg"
                alt="Second slide"
                className="img-fluid"
                style={{ borderRadius: "10px", width: "100%" }}
              />
            </div>
            <div className="carousel-item">
              <img
                src="./carousel.jpg"
                alt="Third slide"
                className="img-fluid"
                style={{ borderRadius: "10px", width: "100%" }}
              />
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#vendorImgs"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#vendorImgs"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    </Fragment>
  );
};

export default VendorPageCarousel;
