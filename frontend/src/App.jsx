import React from "react";

import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import useScreenOrientation from "./components/useScreenOrientation";

function App() {
  const orientation = useScreenOrientation();

  return (
    <div>
      {orientation === "portrait-primary" ? (
        <div className="orientationPortrait">
          Pour une meilleure expérience avec le jeu CLASH HEROES, merci de
          tourner votre appareil.
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
