import React, { useState, useEffect } from "react";
import axios from "axios";
import Filters from "./Filters";

import VendorCard from "./VendorCard";
import BannerCarousel from "./BannerCarousel";

const VendorPage = () => {
  const [homepageData, setHomepageData] = useState({
    adBanner1: [],
    adBanner2: [],
    adBanner3: [],
    introBanner: [],
  });
  useEffect(() => {
    (async function () {
      const {
        data: { imgsData },
      } = await axios.get("http://localhost:3124/api/homepage");
      console.log("allImgs", imgsData);
      const data = {
        adBanner1: [],
        adBanner2: [],
        adBanner3: [],
        introBanner: [],
      };
      imgsData.forEach((item) => {
        data[item.banner].push(item.name);
      });
      setHomepageData(data);
    })();
  }, []);

  return (
    <>
      <div id="wrapper">
        <div className="container">
          <div className="menu">
            <div className="row">
              <div className="col-sm-4 ">
                {/* <div className="left-side"> */}
                <Filters />
                {/* </div> */}
              </div>
              <div className="col-sm-8 ">
                <div className="row">
                  <VendorCard />
                  <VendorCard />
                  <VendorCard />
                </div>
              </div>
            </div>
            {/* <div className="content"> */}
            {/* <div className="row" style={{ marginTop: "50px" }}> */}
            <div className="col-12">
              <BannerCarousel imgs={homepageData.adBanner1} />
            </div>
            {/* </div> */}
            {/* </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default VendorPage;
