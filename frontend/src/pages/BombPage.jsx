import React, { useState, useRef, useContext, useEffect } from "react";
import { useNavigate, useRouteLoaderData } from "react-router-dom";
import HeroLoaderContext from "../contexts/HeroLoaderContext";
import HealthBar from "../components/HealthBar";

function BombPage() {
  const {
    saveWinner,
    setSaveWinner,
    selectHero1,
    selectHero2,
    setProgressLife,
    setProgressLife2,
  } = useContext(HeroLoaderContext);
  
  const audio = useRef(null);
useEffect(() => {
    audio.current.muted = false;
  }, [audio]);
  const navigate = useNavigate();
  const heroes = useRouteLoaderData("app");
  const [timer, setTimer] = useState(10);

  let fighter1Stat = "";
  let fighter2Stat = "";

  useEffect(() => {
    setProgressLife(0);
    setProgressLife2(0);
  }, []);

  const handleBomb = () => {
    const myInterval = setInterval(() => {
      audio.current.play();
      setTimer((oldValue) => {
        if (oldValue === 1) {
          clearInterval(myInterval);
        }
        return oldValue - 1;
      });
    }, 1000);

    const hero1 = heroes.find((hero) => hero.data.image.url === selectHero1);
    const hero2 = heroes.find((hero) => hero.data.image.url === selectHero2);
    if (hero1 && hero2) {
      fighter1Stat = parseInt(hero1.data.powerstats.intelligence, 10);
      fighter2Stat = parseInt(hero2.data.powerstats.intelligence, 10);
    }

    if (fighter1Stat >= fighter2Stat) {
      setProgressLife(100);
      setProgressLife2(Math.random() * 100);

      if (saveWinner === 1) {
        setSaveWinner(2);
      } else {
        setSaveWinner(1);
      }

      setTimeout(() => {
        navigate("/runpage");
      }, 10000);
    } else {
      setProgressLife2(100);
      setProgressLife(Math.random() * 100);
      // setAnimationFight("placeholder");
      // setAnimationFight2("placeholder");
      setTimeout(() => {
        navigate("/runpage");
      }, 10000);
    }
  };

  return (
    <div className="BombPage">

      <audio ref={audio} muted>
        <track kind="captions" />
        <source src="/sons/tic-tac.mp3" type="audio/mp3" />
      </audio>

      <div className="bombPageUp">
        <h1 className="titlePageBomb">Defuse The Bomb</h1>
        <button type="button" className="timer" onClick={handleBomb}>
          {timer}
        </button>
        <HealthBar selectHero1={selectHero1} selectHero2={selectHero2} />
      </div>
      <div className="mainContainer">
        <div className="concurentContainer">
          <img className="bombCard1" src={selectHero1} alt="1" />
        </div>
        <div className="concurentContainer">
          <img className="bombCard2" src={selectHero2} alt="2" />
        </div>
      </div>
    </div>
  );
}
export default BombPage;
