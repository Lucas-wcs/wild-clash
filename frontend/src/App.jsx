import React, { useState, useMemo } from "react";

import { Outlet } from "react-router-dom";
import HeroLoaderContext from "./contexts/HeroLoaderContext";
import Header from "./components/Header";
import useScreenOrientation from "./components/useScreenOrientation";

function App() {
  const orientation = useScreenOrientation();
  const [selectHero1, setSelectHero1] = useState("");
  const [selectHero2, setSelectHero2] = useState("");

  const valueOfContext = useMemo(() => {
    return {
      selectHero1,
      setSelectHero1,
      selectHero2,
      setSelectHero2,
    };
  }, [selectHero1, selectHero2, setSelectHero1, setSelectHero2]);

  return (
    <HeroLoaderContext.Provider value={valueOfContext}>
      <div className="app">
        {orientation === "portrait-primary" ? (
          <div className="orientationPortrait">
            <img
              className="logoClash"
              src="../images/homeLogo.png"
              alt="logo Clash Heroes"
            />
            <div className="arrowRound" />
            <p>
              Afin de mieux profiter du jeu, merci de tourner votre appareil.
            </p>
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
    </HeroLoaderContext.Provider>
  );
}
export default App;
