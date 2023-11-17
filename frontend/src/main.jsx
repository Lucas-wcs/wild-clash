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
    "https://www.superheroapi.com/api.php/10232380959845753/522",
    "https://www.superheroapi.com/api.php/10232380959845753/310",
    "https://www.superheroapi.com/api.php/10232380959845753/271",
    "https://www.superheroapi.com/api.php/10232380959845753/450",
    "https://www.superheroapi.com/api.php/10232380959845753/272",
    "https://www.superheroapi.com/api.php/10232380959845753/289",
    "https://www.superheroapi.com/api.php/10232380959845753/327",
    "https://www.superheroapi.com/api.php/10232380959845753/405",
    "https://www.superheroapi.com/api.php/10232380959845753/107",
    "https://www.superheroapi.com/api.php/10232380959845753/303",
    "https://www.superheroapi.com/api.php/10232380959845753/360",
    "https://www.superheroapi.com/api.php/10232380959845753/70",
    "https://www.superheroapi.com/api.php/10232380959845753/361",
    "https://www.superheroapi.com/api.php/10232380959845753/149",
    "https://www.superheroapi.com/api.php/10232380959845753/140",
    "https://www.superheroapi.com/api.php/10232380959845753/574",
    "https://www.superheroapi.com/api.php/10232380959845753/142",
    "https://www.superheroapi.com/api.php/10232380959845753/139",
    "https://www.superheroapi.com/api.php/10232380959845753/643",
    "https://www.superheroapi.com/api.php/10232380959845753/622",
    "https://www.superheroapi.com/api.php/10232380959845753/455",
    "https://www.superheroapi.com/api.php/10232380959845753/644",
    "https://www.superheroapi.com/api.php/10232380959845753/487",
    "https://www.superheroapi.com/api.php/10232380959845753/655",
    "https://www.superheroapi.com/api.php/10232380959845753/441",
    "https://www.superheroapi.com/api.php/10232380959845753/208",
    "https://www.superheroapi.com/api.php/10232380959845753/344",
    "https://www.superheroapi.com/api.php/10232380959845753/423",
    "https://www.superheroapi.com/api.php/10232380959845753/720",
    "https://www.superheroapi.com/api.php/10232380959845753/287",
    "https://www.superheroapi.com/api.php/10232380959845753/712",
    "https://www.superheroapi.com/api.php/10232380959845753/352",
    "https://www.superheroapi.com/api.php/10232380959845753/579",
    "https://www.superheroapi.com/api.php/10232380959845753/502",
    "https://www.superheroapi.com/api.php/10232380959845753/286",
    "https://www.superheroapi.com/api.php/10232380959845753/717",
    "https://www.superheroapi.com/api.php/10232380959845753/315",
    "https://www.superheroapi.com/api.php/10232380959845753/370",
    "https://www.superheroapi.com/api.php/10232380959845753/27",
    "https://www.superheroapi.com/api.php/10232380959845753/729",
    "https://www.superheroapi.com/api.php/10232380959845753/242",
    "https://www.superheroapi.com/api.php/10232380959845753/687",
    "https://www.superheroapi.com/api.php/10232380959845753/730",
    "https://www.superheroapi.com/api.php/10232380959845753/526",
    "https://www.superheroapi.com/api.php/10232380959845753/257",
    "https://www.superheroapi.com/api.php/10232380959845753/485",
    "https://www.superheroapi.com/api.php/10232380959845753/238",
    "https://www.superheroapi.com/api.php/10232380959845753/307",
    "https://www.superheroapi.com/api.php/10232380959845753/684",
    "https://www.superheroapi.com/api.php/10232380959845753/331",
    "https://www.superheroapi.com/api.php/10232380959845753/114",
    "https://www.superheroapi.com/api.php/10232380959845753/341",
    "https://www.superheroapi.com/api.php/10232380959845753/165",
    "https://www.superheroapi.com/api.php/10232380959845753/354",
    "https://www.superheroapi.com/api.php/10232380959845753/309",
    "https://www.superheroapi.com/api.php/10232380959845753/389",
    "https://www.superheroapi.com/api.php/10232380959845753/623",
    "https://www.superheroapi.com/api.php/10232380959845753/47",
    "https://www.superheroapi.com/api.php/10232380959845753/63",
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
        path: "defuse",
        element: <BombPage />,
      },
      {
        path: "escape",
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
