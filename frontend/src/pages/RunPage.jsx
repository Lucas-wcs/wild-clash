import React from "react";

function RunPage() {
  return (
    <div className="run">
      <div className="runContainer">
        <p className="runTitle">Deja Vu</p>
        <div className="runVersus">
          <div className="Run1">First Container</div>
          <div className="runLogo">
            <img src="./public/images/VS.png" alt="Bouton Versus" />
          </div>
          <div className="Run2">Second Container</div>
        </div>
      </div>
      <div className="runCard">
        <div className="runCard1">1</div>
        <div className="runCard2">2</div>
      </div>
    </div>
  );
}

export default RunPage;
