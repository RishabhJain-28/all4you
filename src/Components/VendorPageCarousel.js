import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
const VendorPageCarousel = ({ images }) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <div className="col-12 col-lg-7">
        <div id="vendorImgs">
          <Carousel wrap={true} activeIndex={index} onSelect={handleSelect}>
            {images &&
              images.map((i) => (
                <Carousel.Item key={i}>
                  <img
                    src={`http://localhost:3124/merchants/${i}`}
                    alt="i"
                    className="img-fluid"
                    style={{ borderRadius: "10px", width: "100%" }}
                  />
                </Carousel.Item>
              ))}
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default VendorPageCarousel;
