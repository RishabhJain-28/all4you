import React from "react";
import Carousel from "./Carousel";

const TopThingsToDo = () => {
  return (
    <div class="top-thing-offer">
      <div class="container">
        <h1 class="text-center mb-3" id="mainhomehead">
          Top Things To Do In Mumbai
        </h1>
        <br />
        <Carousel />
      </div>
    </div>
  );
};

export default TopThingsToDo;
