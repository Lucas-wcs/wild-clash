import React from "react";

import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import useScreenOrientation from "./components/useScreenOrientation";

function App() {
  const orientation = useScreenOrientation();

  return (
    <div className="app">
      {orientation === "portrait-primary" ? (
        <div className="orientationPortrait">
          <img
            className="logoClash"
            src="../images/homeLogo.png"
            alt="logo Clash Heroes"
          />
          <div className="arrowRound" />
          <p>Afin de mieux profiter du jeu, merci de tourner votre appareil.</p>
        </div>
      ) : (
        <div className="body">
          <div className="header">
            <Header />
          </div>
          <Outlet />
        </div>
      )}
    </div>
  );
}
export default App;
