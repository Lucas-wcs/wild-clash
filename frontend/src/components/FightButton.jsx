import React, { useState, useEffect } from "react";
import { useNavigate, useRouteLoaderData } from "react-router-dom";
import { PropTypes } from "prop-types";

function FightButton({ setProgressLife, imgFighter1, imgFighter2 }) {
  const heroes = useRouteLoaderData("app");
  const navigate = useNavigate();
  let fighter1Stat = "";
  let fighter2Stat = "";

  const [heroName1, setHeroName1] = useState("");
  const [heroName2, setHeroName2] = useState("");

  useEffect(() => {
    setInterval(() => {
      setProgressLife(0);
    }, 3000);
  }, []);

  useEffect(() => {
    const hero1 = heroes.find((hero) => hero.data.image.url === imgFighter1);
    const hero2 = heroes.find((hero) => hero.data.image.url === imgFighter2);
    if (hero1 && hero2) {
      setHeroName1(hero1.data.name);
      setHeroName2(hero2.data.name);
    }
  }, [heroes, imgFighter1, imgFighter2]);

  const handleFight = () => {
    const hero1 = heroes.find((hero) => hero.data.image.url === imgFighter1);
    const hero2 = heroes.find((hero) => hero.data.image.url === imgFighter2);
    if (hero1 && hero2) {
      fighter1Stat = parseInt(hero1.data.powerstats.strength, 10);
      fighter2Stat = parseInt(hero2.data.powerstats.strength, 10);
    }

    if (fighter1Stat > fighter2Stat) {
      navigate("/winner", {
        state: { imgFighter1, imgFighter2 },
      });
    } else {
      navigate("/loser", {
        state: { imgFighter1, imgFighter2 },
      });
    }
  };

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

  return (
    <div className="buttonFightTimer">
      <div className="fightButton">
        <div>
          <img
            className="imageFighter animation1"
            src={imgFighter1}
            alt="fighter1"
          />
          <div>{heroName1}</div>
        </div>
        {count === 0 ? (
          <button className="resultFight" type="button" onClick={handleFight}>
            Fight !
          </button>
        ) : (
          <div className="timer">{count}</div>
        )}
        <div>
          <img
            className="imageFighter animation2"
            src={imgFighter2}
            alt="fighter2"
          />
          <div>{heroName2}</div>
        </div>
      </div>
    </div>
  );
}

FightButton.propTypes = {
  setProgressLife: PropTypes.func.isRequired,
  imgFighter1: PropTypes.string.isRequired,
  imgFighter2: PropTypes.string.isRequired,
};

export default FightButton;
