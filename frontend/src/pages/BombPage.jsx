import React, { useState } from "react";
// import HeroLoaderContext from "../contexts/HeroLoaderContext";

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

  // function BombPage() {
  //   const {
  //     saveWinner,
  //     setSaveWinner,
  //     selectHero1,
  //     selectHero2,
  //     setProgressLife,
  //     setProgressLife2,
  //   } = useContext(HeroLoaderContext);

  //   const handleBomb = () => {
  //     const hero1 = heroes.find((hero) => hero.data.image.url === selectHero1);
  //     const hero2 = heroes.find((hero) => hero.data.image.url === selectHero2);
  //     if (hero1 && hero2) {
  //       fighter1Stat = parseInt(hero1.data.powerstats.intelligence, 10);
  //       fighter2Stat = parseInt(hero2.data.powerstats.intelligence, 10);
  //     }

  //     if (fighter1Stat > fighter2Stat) {
  //       setProgressLife(100);
  //       setProgressLife2(Math.random() * 100);
  //       setAnimationFight("placeholder");
  //       setAnimationFight2("placeholder");

  //       if (saveWinner === 1) {
  //         setSaveWinner(2);
  //       } else {
  //         setSaveWinner(1);
  //       }

  //       setTimeout(() => {
  //         navigate("/runpage");
  //       }, 3000);
  //     } else {
  //       setProgressLife2(100);
  //       setProgressLife(Math.random() * 100);
  //       setAnimationFight("placeholder");
  //       setAnimationFight2("placeholder");
  //       setTimeout(() => {
  //         navigate("/runpage");
  //       }, 3000);
  //     }
  //   };

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
