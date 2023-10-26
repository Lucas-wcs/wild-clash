import React from "react";
import { NavLink } from "react-router-dom";

function WikiButton() {
  return (
    <div className="wikibutton">
      <NavLink to="/wikihero" className="wiki">
        WikiHero
      </NavLink>
    </div>
  );
}

export default WikiButton;
