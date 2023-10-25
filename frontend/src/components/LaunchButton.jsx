import React from "react";
import { NavLink } from "react-router-dom";

function WikiButton() {
  return (
    <div>
      <NavLink to="/choosefighter">Launch the fight</NavLink>
    </div>
  );
}

export default WikiButton;
