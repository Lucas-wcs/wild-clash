import React from "react";
import { NavLink } from "react-router-dom";

function HomeButton() {
  return (
    <div>
      <NavLink to="/">Home</NavLink>
    </div>
  );
}

export default HomeButton;
