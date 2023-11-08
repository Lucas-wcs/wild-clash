import React from "react";
import LaunchButton from "../components/LaunchButton";
import WikiButton from "../components/WikiButton";

function Home() {
  return (
    <div className="home">
      <LaunchButton />
      <img
        className="homelogo"
        src="public/images/homeLogo.png"
        alt="homeLogo"
      />
      <WikiButton />
    </div>
  );
}

export default Home;
