import React from "react";
import { NavLink } from "react-router-dom";

function HomeButton() {
  return (
    <div>
      <NavLink className="homebutton" to="/">
        <div className="shadow">
          <img src="/public/images/LogoHomeButton.png" alt="Home" />
        </div>
      </NavLink>
    </div>
  );
}

export default HomeButton;
