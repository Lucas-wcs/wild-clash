import React, { useContext, useState, useEffect, useRef } from "react";
import { useNavigate, useRouteLoaderData } from "react-router-dom";
import HeroLoaderContext from "../contexts/HeroLoaderContext";
import HealthBar from "../components/HealthBar";

function RunPage() {
  const {
    saveWinner,
    saveLoser,
    setSaveLoser,
    setSaveWinner,
    selectHero1,
    selectHero2,
    setProgressLife,
    setProgressLife2,
  } = useContext(HeroLoaderContext);

  const navigate = useNavigate();

  const heroes = useRouteLoaderData("app");

  let fighter1Stat = "";
  let fighter2Stat = "";

  const audio = useRef(null);

  useEffect(() => {
    setProgressLife(0);
    setProgressLife2(0);
    if (audio.current) {
      audio.current.muted = false;
      audio.current.play();
    }
  }, []);

  const [animationRun, setAnimationRun] = useState("");
  const [animationRun2, setAnimationRun2] = useState("");
  const [count, setCount] = useState(3);
  useEffect(() => {
    const countdownInterval = setInterval(() => {
      if (count > 0) {
        setCount(count - 1);
      } else {
        clearInterval(countdownInterval);
      }
    }, 1000);
    return () => {
      clearInterval(countdownInterval);
    };
  }, [count]);
  const [desactivateButton, setDesactivateButton] = useState(false);
  const hero1 = heroes.find((hero) => hero.data.image.url === selectHero1);
  const hero2 = heroes.find((hero) => hero.data.image.url === selectHero2);
  if (hero1 && hero2) {
    fighter1Stat = parseInt(hero1.data.powerstats.speed, 10);
    fighter2Stat = parseInt(hero2.data.powerstats.speed, 10);
  }

  const handleRun = () => {
    setDesactivateButton(true);

    if (fighter1Stat > fighter2Stat) {
      setProgressLife(100);
      setProgressLife2(80);
      setAnimationRun("animationRun");
      setAnimationRun2("animationRun2");
      if (saveWinner === 1) {
        setSaveWinner(2);
        setTimeout(() => {
          navigate("/winner");
        }, 4000);
      } else if (saveWinner === 2) {
        setSaveWinner(3);
        setTimeout(() => {
          navigate("/winner");
        }, 4000);
      } else {
        setSaveWinner(1);
        setTimeout(() => {
          navigate("/loser");
        }, 4000);
      }
    } else {
      setProgressLife2(100);
      setProgressLife(80);
      setAnimationRun("animationUpRun2");
      setAnimationRun2("animationUpRun");
      setProgressLife2(100);
      setProgressLife(Math.random() * 100);
      if (saveLoser === 2) {
        setSaveLoser(3);
        setTimeout(() => {
          navigate("/loser");
        }, 4000);
      } else if (saveLoser === 1) {
        setSaveLoser(2);
        setTimeout(() => {
          navigate("/loser");
        }, 4000);
      } else {
        setSaveLoser(1);
        setTimeout(() => {
          navigate("/winner");
        }, 4000);
      }
    }
  };
  let content = null;
  if (count === 0 && desactivateButton === false) {
    content = (
      <button className="resultRun" type="button" onClick={handleRun}>
        Go !
      </button>
    );
  } else if (count !== 0 && desactivateButton === false) {
    content = <div className="timer">{count}</div>;
  } else {
    content = <div />;
  }

  return (
    <div className="run">
      <audio ref={audio} muted>
        <track kind="captions" />
        <source
          src="public/sons/3-2-1-go!-smash-ultimate-made-with-Voicemod-technology.mp3"
          type="audio/mp3"
        />
      </audio>
      <div className="runContainer">
        <div className="logoBox">
          <p>3rd Trial : ESCAPE !</p>
          <img
            className="logoFight"
            src="/images/logo_projet2.png"
            alt="Logo Clash Heroes"
          />
        </div>
        <HealthBar selectHero1={selectHero1} selectHero2={selectHero2} />
        {content}
      </div>
      <div className="runCard">
        <img className={`runCard1 ${animationRun}`} src={selectHero1} alt="1" />
        <img
          className={`runCard2 ${animationRun2}`}
          src={selectHero2}
          alt="2"
        />
      </div>
    </div>
  );
}

export default RunPage;
