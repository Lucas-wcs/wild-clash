import React, { useState, useRef, useContext, useEffect } from "react";
import { useNavigate, useRouteLoaderData } from "react-router-dom";
import HeroLoaderContext from "../contexts/HeroLoaderContext";
import HealthBar from "../components/HealthBar";

function BombPage() {
  const {
    saveWinner,
    setSaveLoser,
    saveLoser,
    setSaveWinner,
    selectHero1,
    selectHero2,
    setProgressLife,
    setProgressLife2,
  } = useContext(HeroLoaderContext);
  const audio = useRef(null);
  const audio2 = useRef(null);
  useEffect(() => {
    if (audio2.current) {
      audio2.current.muted = false;
      audio2.current.play();
    }
    if (audio.current) {
      audio.current.muted = false;
    }
  }, []);
  const navigate = useNavigate();
  const heroes = useRouteLoaderData("app");
  const [timer, setTimer] = useState(30);

  let fighter1Stat = "";
  let fighter2Stat = "";

  useEffect(() => {
    setProgressLife(0);
    setProgressLife2(0);
  }, []);

  const [disabledCounter, setDisabledCounter] = useState(false);

  const handleBomb = () => {
    setDisabledCounter(true);
    const myInterval = setInterval(() => {
      if (audio.current != null) {
        audio.current.play();
      }
      setTimer((oldValue) => {
        if (oldValue === 1) {
          clearInterval(myInterval);
        }
        return oldValue - 1;
      });
    }, 200);

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
      }, 4500);
    } else {
      if (saveLoser === 1) {
        setSaveLoser(2);
      } else {
        setSaveLoser(1);
      }
      setProgressLife2(100);
      setProgressLife(Math.random() * 100);
      setTimeout(() => {
        navigate("/runpage");
      }, 4500);
    }
  };

  return (
    <div className="BombPage">
      <audio ref={audio} muted>
        <track kind="captions" />
        <source src="/sons/tic-tac.mp3" type="audio/mp3" />
      </audio>

      <audio ref={audio2} muted>
        <track kind="captions" />
        <source src="/sons/Mission-Impossible.mp3.mp3" type="audio/mp3" />
      </audio>
      <h1 className="titlePageBomb">Defuse The Bomb</h1>
      <div className="containerTimer">
        <button
          type="button"
          className="timer"
          onClick={handleBomb}
          aria-label="button"
        />
        <button
          type="button"
          className="timer"
          onClick={handleBomb}
          disabled={disabledCounter}
        >
          <img src="./public/images/runbomb.png" alt="" />
          <div className="test">{timer}</div>
        </button>
      </div>

      <HealthBar selectHero1={selectHero1} selectHero2={selectHero2} />
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
