import React from "react";
import logo from "../../imgs/logo.png";

const Banner = ({ children }) => {
  return (
    <div className="banner text-white">
      <div className="container p-4 text-center">
        <img src={logo} alt="banner" />
        <div>
          <span id="get-part">A place to get</span>
          { children }
          <span> the cool stuff.</span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
