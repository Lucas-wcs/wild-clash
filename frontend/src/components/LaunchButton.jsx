import React from "react";
import { NavLink } from "react-router-dom";

function LaunchButton() {
  return (
    <div>
      <NavLink to="/choosefighter" className="launch">
        Launch the fight
      </NavLink>
    </div>
  );
}

export default LaunchButton;
