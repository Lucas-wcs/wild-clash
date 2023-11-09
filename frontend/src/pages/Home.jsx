import React, { useState } from "react";
import LaunchButton from "../components/LaunchButton";
import WikiButton from "../components/WikiButton";

function Home() {
  const [isOpenCurtain, setIsOpenCurtain] = useState(false);

  function handleCurtain() {
    setIsOpenCurtain(!isOpenCurtain);
  }
  return (
    <div className="home">
      <div className="curtain">
        <div
          className={`curtain-panel-left ${
            isOpenCurtain ? "openAnimationL" : "closeAnimationL"
          }`}
        >
          <div className="button-wrapper">
            <button type="button" onClick={handleCurtain} className="logo-1">
              <img src="./public/images/logo_1-1.png" alt="" />
            </button>
          </div>
        </div>

        <div
          className={`curtain-panel-right ${
            isOpenCurtain ? "openAnimationR" : "closeAnimationR"
          }`}
        >
          <button type="button" onClick={handleCurtain} className="logo-2">
            <img src="./public/images/logo_2.png" alt="" />
          </button>
        </div>
      </div>
      <img
        className="homelogo"
        src="public/images/homeLogo.png"
        alt="homeLogo"
      />
      <img className="homelogo" src="/images/homeLogo.png" alt="homeLogo" />
      <div className="homeButtons">
        <LaunchButton />
        <WikiButton className="wikiButton" />
      </div>
    </div>
  );
}

export default Home;
