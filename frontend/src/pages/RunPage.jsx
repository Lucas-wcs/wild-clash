import React, { useContext, useState, useEffect } from "react";
import { useNavigate, useRouteLoaderData } from "react-router-dom";
import HeroLoaderContext from "../contexts/HeroLoaderContext";
import HealthBar from "../components/HealthBar";

function RunPage() {
  const {
    saveWinner,
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

  const [animationRun, setAnimationRun] = useState("");
  const [animationRun2, setAnimationRun2] = useState("");
  const [count, setCount] = useState(3);
  useEffect(() => {
    const countdownInterval = setInterval(() => {
      setProgressLife(0);
      setProgressLife2(0);
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

  const handleRun = () => {
    setDesactivateButton(true);
    const hero1 = heroes.find((hero) => hero.data.image.url === selectHero1);
    const hero2 = heroes.find((hero) => hero.data.image.url === selectHero2);
    if (hero1 && hero2) {
      fighter1Stat = parseInt(hero1.data.powerstats.speed, 10);
      fighter2Stat = parseInt(hero2.data.powerstats.speed, 10);
    }

    if (fighter1Stat > fighter2Stat) {
      setProgressLife(100);
      setProgressLife2(Math.random() * 100);
      setAnimationRun("animationRun");
      setAnimationRun2("animationRun2");

      if (saveWinner === 1) {
        setSaveWinner(2);
      } else if (saveWinner === 2) {
        setSaveWinner(3);
      } else {
        setSaveWinner(1);
      }

      setTimeout(() => {
        if (saveWinner >= 2) {
          navigate("/winner");
        } else {
          navigate("/loser");
        }
      }, 2500);
    } else {
      setProgressLife2(100);
      setProgressLife(Math.random() * 100);
      setAnimationRun("animationUpRun2");
      setAnimationRun2("animationUpRun");
      setTimeout(() => {
        if (saveWinner >= 2) {
          navigate("/winner");
        } else {
          navigate("/loser");
        }
      }, 2500);
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
      <div className="runContainer">
        <p className="runTitle">Deja Vu</p>
        <HealthBar />
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
