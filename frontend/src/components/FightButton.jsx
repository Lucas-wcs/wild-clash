import React, { useState, useEffect } from "react";
import { useNavigate, useRouteLoaderData } from "react-router-dom";
import { PropTypes } from "prop-types";

function FightButton({
  setProgressLife2,
  setProgressLife,
  imgFighter1,
  imgFighter2,
}) {
  const heroes = useRouteLoaderData("app");
  const navigate = useNavigate();
  let fighter1Stat = "";
  let fighter2Stat = "";

  const [animationFight, setAnimationFight] = useState("animationRun");
  const [animationFight2, setAnimationFight2] = useState("");

  const handleFight = () => {
    const hero1 = heroes.find((hero) => hero.data.image.url === imgFighter1);
    const hero2 = heroes.find((hero) => hero.data.image.url === imgFighter2);
    if (hero1 && hero2) {
      fighter1Stat = parseInt(hero1.data.powerstats.strength, 10);
      fighter2Stat = parseInt(hero2.data.powerstats.strength, 10);
    }

    if (fighter1Stat > fighter2Stat) {
      setProgressLife(Math.random() * 100);
      setProgressLife2(0);
      setAnimationFight("animationWinL");
      setAnimationFight2("animationDefeatR");
      setTimeout(() => {
        navigate("/winner", {
          state: { imgFighter1, imgFighter2 },
        });
      }, 3000);
    } else {
      setProgressLife2(Math.random() * 100);
      setProgressLife(0);
      setAnimationFight("animationDefeatL");
      setAnimationFight2("animationWinR");
      setTimeout(() => {
        navigate("/loser", {
          state: { imgFighter1, imgFighter2 },
        });
      }, 3000);
    }
  };

  const [count, setCount] = useState(3);
  useEffect(() => {
    const countdownInterval = setInterval(() => {
      setProgressLife(100);
      setProgressLife2(100);
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
            className={`imageFighter ${animationFight}`}
            src={imgFighter1}
            alt="fighter1"
          />
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
            className={`imageFighter ${animationFight2}`}
            src={imgFighter2}
            alt="fighter2"
          />
        </div>
      </div>
    </div>
  );
}

FightButton.propTypes = {
  setProgressLife: PropTypes.func.isRequired,
  setProgressLife2: PropTypes.func.isRequired,
  imgFighter1: PropTypes.string.isRequired,
  imgFighter2: PropTypes.string.isRequired,
};

export default FightButton;
