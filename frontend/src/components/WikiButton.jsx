import React from "react";
import { NavLink } from "react-router-dom";

function WikiButton() {
  return (
    <div>
      <NavLink to="/wikihero">WikiHero</NavLink>
    </div>
  );
}

export default WikiButton;
