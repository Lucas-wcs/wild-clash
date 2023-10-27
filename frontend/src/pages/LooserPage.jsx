import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

function LooserPage() {
  const location = useLocation();
  const urlImgFighter1 = location.state.imgFighter1;
  const navigate = useNavigate();

  const handleNewGame = () => {
    navigate("/chooseFighter");
  };

  return (
    <div className="firstContainer2">
      <div>
        <img src={urlImgFighter1} alt="Fighter1" />
        <div className="secondContainer2">
          <p className="firstText2">You Lose !</p>
          <button
            type="button"
            className="firstButton2"
            onClick={handleNewGame}
          >
            New Game
          </button>
        </div>
      </div>

      <div className="logo">
        {/* <a href="#"> */}
        {/* <img src="../public/images/logo2_1-removebg-preview 3.png" alt="BoutonHome" /> */}
        {/* </a> */}
      </div>
    </div>
  );
}

export default LooserPage;
