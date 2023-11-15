import React, { useState, useEffect, useContext } from "react";
import { useNavigate, useRouteLoaderData } from "react-router-dom";
import { PropTypes } from "prop-types";
import HeroLoaderContext from "../contexts/HeroLoaderContext";

function FightButton({ selectHero1, selectHero2 }) {
  const { setProgressLife2, setProgressLife, setSaveWinner } =
    useContext(HeroLoaderContext);
  const heroes = useRouteLoaderData("app");
  const navigate = useNavigate();
  let fighter1Stat = "";
  let fighter2Stat = "";
  const [animationFight, setAnimationFight] = useState("animation1");
  const [animationFight2, setAnimationFight2] = useState("animation2");
  const [desactivateButton, setDesactivateButton] = useState(false);

  const handleFight = () => {
    setDesactivateButton(true);
    const hero1 = heroes.find((hero) => hero.data.image.url === selectHero1);
    const hero2 = heroes.find((hero) => hero.data.image.url === selectHero2);
    if (hero1 && hero2) {
      fighter1Stat = parseInt(hero1.data.powerstats.strength, 10);
      fighter2Stat = parseInt(hero2.data.powerstats.strength, 10);
    }

    if (fighter1Stat >= fighter2Stat) {
      setProgressLife(Math.random() * 100);
      setProgressLife2(0);
      setAnimationFight("animationWinL");
      setAnimationFight2("animationDefeatR");
      setSaveWinner(1);
      setTimeout(() => {
        navigate("/bombpage");
      }, 3000);
    } else {
      setProgressLife2(Math.random() * 100);
      setProgressLife(0);
      setAnimationFight("animationDefeatL");
      setAnimationFight2("animationWinR");
      setTimeout(() => {
        navigate("/bombpage");
      }, 3000);
    }
  };

  const [count, setCount] = useState(3);
  useEffect(() => {
    setProgressLife(100);
    setProgressLife2(100);
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

  let content = null;
  if (count === 0 && desactivateButton === false) {
    content = (
      <button className="resultFight" type="button" onClick={handleFight}>
        Fight !
      </button>
    );
  } else if (desactivateButton === false) {
    content = <div className="timer">{count}</div>;
  } else {
    content = <div />;
  }

  return (
    <div className="buttonFightTimer">
      <div className="fightButton">
        <div>
          <img
            className={`imageFighter ${animationFight}`}
            src={selectHero1}
            alt="fighter1"
          />
        </div>
        {content}
        <div>
          <img
            className={`imageFighter ${animationFight2}`}
            src={selectHero2}
            alt="fighter2"
          />
        </div>
      </div>
    </div>
  );
}

FightButton.propTypes = {
  selectHero1: PropTypes.string.isRequired,
  selectHero2: PropTypes.string.isRequired,
};

export default FightButton;
