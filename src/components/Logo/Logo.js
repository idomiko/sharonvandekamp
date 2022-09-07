import React from "react";
import Tilt from "react-parallax-tilt";
import "./Logo.css";
import LogoJPG from "./LogoJPG.jpg";

const Logo = () => {
  return (
    <Tilt className="Tilt ma1 br2">
      <div className="logoImg">
        <img src={LogoJPG} alt="logo" />
      </div>
    </Tilt>
  );
};

export default Logo;
