import React, { useState, useEffect } from "react";

const fighters = [
  {
    name: "captain America",
    force: 32,
    image: "/public/images/captain.png",
  },
  {
    name: "Dark Vador",
    force: 50,
  },
];

function FightButton() {
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
            className="imageFigther1"
            alt="fighter1"
          />
          <div>{fighters[0].name}</div>
        </div>
        {count === 0 ? (
          <button type="button">Figth !</button>
        ) : (
          <div className="timer">{count}</div>
        )}
        <div>{fighters[1].name}</div>
      </div>
    </div>
  );
}

export default FightButton;
