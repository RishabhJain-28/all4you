import React, { useState } from "react";
import HeaderTop from "./Header-top";
import HeaderBottom from "./Header-bottom";
import HeaderLocation from "./Header-Location";

const Header = () => {
  const [location, setLocation] = useState("ds");
  const [showChangeLocation, setShowChangeLocation] = useState(true);

  // const openChangeLocation = () => {
  //   setShowChangeLocation(true);
  // };
  // const openChangeLocation = () => {
  //   setShowChangeLocation(true);
  // };

  return (
    <header>
      <div className="header">
        {!showChangeLocation ? (
          <>
            <HeaderTop
              location={location}
              setShowChangeLocation={setShowChangeLocation}
            />
            <HeaderBottom />
          </>
        ) : (
          <HeaderLocation setShowChangeLocation={setShowChangeLocation} />
        )}
      </div>
    </header>
  );
};

export default Header;
