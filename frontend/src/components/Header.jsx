import React from "react";
import { useLocation } from "react-router-dom";
import HomeButton from "./HomeButton";

function Header() {
  const { pathname } = useLocation();

  if (pathname === "/") {
    console.info(pathname);
  }

  return <div className="header">{pathname !== "/" && <HomeButton />}</div>;
}

export default Header;
