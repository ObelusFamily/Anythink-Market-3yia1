import React from "react";

import logo from "../../imgs/logo.png";
import TitleSearchBar from "./TitleSearchBar";

const Banner = () => {
  return (
    <div className="banner text-white">
      <div className="container p-4 text-center">
        <img src={logo} alt="banner" />
        <div>
          <span id="get-part">A place to get</span>
          <TitleSearchBar />
          <span> the cool stuff.</span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
