import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const fighters = [
  {
    name: "captain America",
    force: 32,
    image: "/public/images/captain.png",
  },
  {
    name: "Dark Vador",
    force: 50,
    image: "/public/images/goku.png",
  },
];

function FightButton() {
  const navigate = useNavigate();
  const handleFight = () => {
    if (fighters[0].force > fighters[1].force) {
      navigate("/winner");
    } else {
      navigate("/loser");
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
      <div className="buttonFight">
        <div>
          <img
            src={fighters[0].image}
            className="imageFigther animation1"
            alt="fighter1"
          />
          <div>{fighters[0].name}</div>
        </div>
        {count === 0 ? (
          <button type="button" onClick={handleFight}>
            Fight !
          </button>
        ) : (
          <div className="timer">{count}</div>
        )}
        <div>
          <img
            src={fighters[1].image}
            className="imageFigther animation2"
            alt="fighter2"
          />
          <div>{fighters[1].name}</div>
        </div>
      </div>
    </div>
  );
}

export default FightButton;
