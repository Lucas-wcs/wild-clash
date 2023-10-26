import React from "react";
import { NavLink } from "react-router-dom";

function WikiButton() {
  return (
    <div className="wikibutton">
      <NavLink to="/wikihero" className="wiki">
        <img src="../public/images/wiki.png" alt="Wiki" />
      </NavLink>
    </div>
  );
}

export default WikiButton;
