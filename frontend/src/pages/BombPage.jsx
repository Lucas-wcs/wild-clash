import React, { useState } from "react";

function BombPage() {
  const [timer, setTimer] = useState(60);

  const handleDecrementTime = () => {
    const myInterval = setInterval(() => {
      setTimer((oldValue) => {
        if (oldValue === 1) {
          clearInterval(myInterval);
        }
        return oldValue - 1;
      });
    }, 700);
  };

  return (
    <div className="BombPage">
      <h1 className="titlePageBomb">Defuse The Bomb</h1>
      <div className="ContainerImageBomb">
        <p>{timer}</p>
      </div>
      <div className="largeBox">
        <div className="concurentContainer">
          <div className="inlineDiv" />
        </div>
        <button
          type="button"
          className="ButtonBombFight"
          onClick={handleDecrementTime}
        >
          Start Counting
        </button>
        <div className="secondConcurentContainer">
          <div className="inlineDiv" />
        </div>
      </div>
    </div>
  );
}
export default BombPage;
