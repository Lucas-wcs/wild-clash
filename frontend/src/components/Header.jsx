import React from "react";
import { useLocation } from "react-router-dom";
import HomeButton from "./HomeButton";
import WikiHero from "./WikiButton";

function Header() {
  const wikilocation = useLocation();
  return (
    <div className="header">
      <HomeButton />
      {wikilocation.pathname === "/" && <WikiHero />}
    </div>
  );
}

export default Header;
