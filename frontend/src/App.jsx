import React, { useState, useMemo, useLayoutEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import HeroLoaderContext from "./contexts/HeroLoaderContext";
import Header from "./components/Header";
import useScreenOrientation from "./components/useScreenOrientation";

function App() {
  const orientation = useScreenOrientation();
  const [selectHero1, setSelectHero1] = useState("");
  const [selectHero2, setSelectHero2] = useState("");
  const [saveWinner, setSaveWinner] = useState(0);
  const [saveLoser, setSaveLoser] = useState(0);
  const [progressLife, setProgressLife] = useState(0);
  const [progressLife2, setProgressLife2] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();
  useLayoutEffect(() => {
    if (location.pathname !== "/") {
      navigate("/");
    }
  }, []);

  const valueOfContext = useMemo(() => {
    return {
      saveLoser,
      setSaveLoser,
      selectHero1,
      setSelectHero1,
      selectHero2,
      setSelectHero2,
      saveWinner,
      setSaveWinner,
      progressLife,
      setProgressLife,
      progressLife2,
      setProgressLife2,
    };
  }, [
    saveLoser,
    setSaveLoser,
    selectHero1,
    selectHero2,
    setSelectHero1,
    setSelectHero2,
    saveWinner,
    setSaveWinner,
    progressLife,
    setProgressLife,
    progressLife2,
    setProgressLife2,
  ]);

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
