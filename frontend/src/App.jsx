import React, { useEffect, useState } from "react";
import axios from "axios";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";

const [heros, setHeros] = useState([]);
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

function fetchHeroes() {
  axios
    .all(endpoints.map((endpoint) => axios.get(endpoint)))
    .then((res) => setHeros(res))
    .catch((err) => console.info(err));
}

useEffect(() => {
  fetchHeroes();
}, []);

console.info(heros);

// return (
//   <div>
//     {heros.map((hero) => (
//       <DisplayHero
//         key={hero.data.name}
//         url={hero.data.image.url}
//         name={hero.data.name}
//       />
//     ))}

function App() {
  return (
    <div className="body">
      <div className="header">
        <Header />
      </div>
      <Outlet />
    </div>
  );
}

export default App;
