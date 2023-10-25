import React from "react";
import { NavLink } from "react-router-dom";

function HomeButton() {
  return (
    <div>
      <NavLink className="homebutton" to="/">
        <img src="/public/images/LogoHomeButton.png" alt="Home" />
      </NavLink>
    </div>
  );
}

export default HomeButton;
