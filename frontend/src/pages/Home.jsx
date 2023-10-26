import React from "react";
import LaunchButton from "../components/LaunchButton";
import WikiButton from "../components/WikiButton";

function Home() {
  return (
    <div className="home">
      <img src="public\images\homePage.png" alt="storm background" />
      <LaunchButton />
      <WikiButton />
    </div>
  );
}

export default Home;
