import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App, { loadDatas } from "./App";
import "./styles/index.scss";
import WikiHero from "./pages/WikiHero";
import Home from "./pages/Home";
import ChooseFighter from "./pages/ChooseFighter";
import FightPage from "./pages/FightPage";
import WinnerPage from "./pages/WinnerPage";
import LooserPage from "./pages/LooserPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "wikihero",
        element: <WikiHero />,
        loader: loadDatas,
      },
      {
        path: "choosefighter",
        element: <ChooseFighter />,
        loader: loadDatas,
      },
      {
        path: "fight",
        element: <FightPage />,
        loader: loadDatas,
      },
      {
        path: "winner",
        element: <WinnerPage />,
        loader: loadDatas,
      },
      {
        path: "loser",
        element: <LooserPage />,
        loader: loadDatas,
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
