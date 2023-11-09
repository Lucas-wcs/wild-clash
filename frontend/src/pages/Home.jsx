import React from "react";
import LaunchButton from "../components/LaunchButton";
import WikiButton from "../components/WikiButton";

function Home() {
  return (
    <div className="home">
      <img className="homelogo" src="/images/homeLogo.png" alt="homeLogo" />
      <div className="homeButtons">
        <LaunchButton />
        <WikiButton className="wikiButton" />
      </div>
    </div>
  );
}

export default Home;
