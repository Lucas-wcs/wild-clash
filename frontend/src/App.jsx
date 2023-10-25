import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";

function App() {
  console.warn("app");
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
