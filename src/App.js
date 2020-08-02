import React from "react";

import "./style.css";

import Header from "./Components/Header";
import NavMenu from "./Components/NavMenu";
import Trending from "./Components/Trending";
import Banner from "./Components/Banner";
import TopThingsToDo from "./Components/TopThingsToDo";
import Carousel from "./Components/Carousel";
import PopularBrands from "./Components/PopularBrands";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <div id="wrapper">
        <Header />
        <NavMenu />
        <div className="home_slider">
          <div style={{ minHeight: 10 }}>
            <Carousel />
          </div>
        </div>
        <div className="content">
          <Trending />
          <Banner />
          <TopThingsToDo />
          <Banner />
          <PopularBrands />
          <Banner />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
