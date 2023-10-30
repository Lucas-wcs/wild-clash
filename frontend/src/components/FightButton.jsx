import React, { useState, useEffect } from "react";
import { useNavigate, useRouteLoaderData } from "react-router-dom";
import { PropTypes } from "prop-types";

function FightButton({ imgFighter1, imgFighter2 }) {
  const heroes = useRouteLoaderData("app");
  const navigate = useNavigate();

  const [heroName1, setHeroName1] = useState("");
  const [heroName2, setHeroName2] = useState("");

  useEffect(() => {
    const hero1 = heroes.find((hero) => hero.data.image.url === imgFighter1);
    if (hero1) {
      setHeroName1(hero1.data.name);
    }
    const hero2 = heroes.find((hero) => hero.data.image.url === imgFighter2);
    if (hero2) {
      setHeroName2(hero2.data.name);
    }
  }, [heroes, imgFighter1, imgFighter2]);

  const handleFight = () => {
    navigate("/winner", {
      state: { imgFighter1, imgFighter2 },
    });
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
            className="imageFigther animation1"
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
            className="imageFigther animation2"
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
  imgFighter1: PropTypes.string.isRequired,
  imgFighter2: PropTypes.string.isRequired,
};

export default FightButton;
