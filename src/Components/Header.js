import React from "react";
import HeaderTop from "./Header-top";
import SecondPart from "./Second_part";

const Header = () => {
  return (
    <header>
      <div className="header">
        <HeaderTop />

        {/* <!-- second part start -->
          <!-- <style>
            @media only screen and (min-width: 770px) {
              .hotel-submenu {
                margin-top: 20px;
              }

              .arround-you-submenu {
                margin-top: 20px;
              }
            }
          </style> --> */}
        <SecondPart />
      </div>
    </header>
  );
};

export default Header;
