import React, { useState, useEffect, useRef } from "react";
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
  const audio = useRef(null);
  const audio2 = useRef(null);
  const button = useRef(null);

  const [animationFight, setAnimationFight] = useState("animation1");
  const [animationFight2, setAnimationFight2] = useState("animation2");

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
        audio.current.muted = false;
        audio.current.play();
      }, 3000);
      setTimeout(() => {
        navigate("/winner", {
          state: { imgFighter1, imgFighter2 },
        });
      }, 6000);
    } else {
      setProgressLife2(Math.random() * 100);
      setProgressLife(0);
      setAnimationFight("animationDefeatL");
      setAnimationFight2("animationWinR");
      setTimeout(() => {
        audio2.current.muted = false;
        audio2.current.play();
      }, 3000);
      setTimeout(() => {
        navigate("/loser", {
          state: { imgFighter1, imgFighter2 },
        });
      }, 6000);
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
          <button
            className="resultFight"
            type="button"
            onClick={handleFight}
            ref={button}
          >
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
      <audio ref={audio} muted>
        <track kind="captions" />
        <source src="/sons/applausSound.mp3" type="audio/mp3" />
      </audio>
      <audio ref={audio2} muted>
        <track kind="captions" />
        <source src="/sons/ouh.mp3" type="audio/mp3" />
      </audio>
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
