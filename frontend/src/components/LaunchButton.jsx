import React from "react";
import { useNavigate } from "react-router-dom";

function LaunchButton() {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/choosefighter");
  };

  return (
    <div>
      <button className="btn-shine" type="button" onClick={handleNavigation}>
        {" "}
        <span>Launch the fight</span>
      </button>
    </div>
  );
}

export default LaunchButton;
