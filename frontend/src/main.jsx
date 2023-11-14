import React from "react";
import ReactDOM from "react-dom/client";
import axios from "axios";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import "./styles/index.scss";
import WikiHero from "./pages/WikiHero";
import Home from "./pages/Home";
import ChooseFighter from "./pages/ChooseFighter";
import FightPage from "./pages/FightPage";
import WinnerPage from "./pages/WinnerPage";
import LooserPage from "./pages/LooserPage";
import RunPage from "./pages/RunPage";
import BombPage from "./pages/BombPage";

const loadDatas = async () => {
  const endpoints = [
    "https://www.superheroapi.com/api.php/10232380959845753/346",
    "https://www.superheroapi.com/api.php/10232380959845753/310",
    "https://www.superheroapi.com/api.php/10232380959845753/450",
    "https://www.superheroapi.com/api.php/10232380959845753/289",
    "https://www.superheroapi.com/api.php/10232380959845753/405",
    "https://www.superheroapi.com/api.php/10232380959845753/303",
    "https://www.superheroapi.com/api.php/10232380959845753/70",
    "https://www.superheroapi.com/api.php/10232380959845753/149",
    "https://www.superheroapi.com/api.php/10232380959845753/574",
    "https://www.superheroapi.com/api.php/10232380959845753/622",
    "https://www.superheroapi.com/api.php/10232380959845753/644",
    "https://www.superheroapi.com/api.php/10232380959845753/655",
    "https://www.superheroapi.com/api.php/10232380959845753/176",
    "https://www.superheroapi.com/api.php/10232380959845753/208",
    "https://www.superheroapi.com/api.php/10232380959845753/423",
    "https://www.superheroapi.com/api.php/10232380959845753/287",
    "https://www.superheroapi.com/api.php/10232380959845753/352",
    "https://www.superheroapi.com/api.php/10232380959845753/502",
    "https://www.superheroapi.com/api.php/10232380959845753/717",
    "https://www.superheroapi.com/api.php/10232380959845753/370",
    "https://www.superheroapi.com/api.php/10232380959845753/729",
    "https://www.superheroapi.com/api.php/10232380959845753/687",
    "https://www.superheroapi.com/api.php/10232380959845753/526",
    "https://www.superheroapi.com/api.php/10232380959845753/485",
  ];
  const heroes = await axios.all(
    endpoints.map((endpoint) => axios.get(endpoint))
  );
  return heroes;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    id: "app",
    loader: loadDatas,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "wikihero",
        element: <WikiHero />,
      },
      {
        path: "choosefighter",
        element: <ChooseFighter />,
      },
      {
        path: "fight",
        element: <FightPage />,
      },
      {
        path: "winner",
        element: <WinnerPage />,
      },
      {
        path: "loser",
        element: <LooserPage />,
      },
      {
        path: "bombpage",
        element: <BombPage />,
      },
      {
        path: "runpage",
        element: <RunPage />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
