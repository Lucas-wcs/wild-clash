import React from "react";

function LooserPage() {
  return (
    <div className="firstContainer2">
      <div>
        <img src="../public/images/captainamerica.png" alt="CaptainAmerica" />
        <div className="secondContainer2">
          <p className="firstText2">You Lose !</p>
          <button type="button" className="firstButton2">
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
