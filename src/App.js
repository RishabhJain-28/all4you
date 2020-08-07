import React from "react";

import "./style.css";

import Homepage from "./Components/Homepage";
import VendorPage from "./Components/VendorPage";
import Adminpage from "./Components/Admin/Adminpage";
import DealsPage from "./Components/DealsPage";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Header />

      {/* <VendorPage /> */}
      <Homepage />
      {/* <DealsPage /> */}

      {/* <Adminpage /> */}
      <Footer />
    </>
  );
}

export default App;
