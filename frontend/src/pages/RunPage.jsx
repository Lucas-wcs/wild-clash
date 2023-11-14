// import React, { useContext } from "react";
// import HeroLoaderContext from "../contexts/HeroLoaderContext";

function RunPage() {
  // const {
  //   saveWinner,
  //   setSaveWinner,
  //   selectHero1,
  //   selectHero2,
  //   setProgressLife,
  //   setProgressLife2,
  // } = useContext(HeroLoaderContext);

  /*
  
  const handleBomb = () => {
    const hero1 = heroes.find((hero) => hero.data.image.url === selectHero1);
    const hero2 = heroes.find((hero) => hero.data.image.url === selectHero2);
    if (hero1 && hero2) {
      fighter1Stat = parseInt(hero1.data.powerstats.speed, 10);
      fighter2Stat = parseInt(hero2.data.powerstats.speed, 10);
    }

    if (fighter1Stat > fighter2Stat) {
      setProgressLife(100);
      setProgressLife2(Math.random() * 100);
      setAnimationFight("placeholder");
      setAnimationFight2("placeholder");

      if(saveWinner === 1){
      setSaveWinner(2);}

    else if(saveWinner === 2){
      setSaveWinner(3);}
    }
    else{
      setSaveWinner(1)
    }

      setTimeout(() => {
        if(saveWinner>=2){
          navigate("/winner")
        }
        else{
          navigate("/loser")
        }
        ;
      }, 3000);

    } else {
      setProgressLife2(100);
      setProgressLife(Math.random() * 100);
      setAnimationFight("placeholder");
      setAnimationFight2("placeholder");
      setTimeout(() => {
        if(saveWinner>=2){
          navigate("/winner")
        }
        else{
          navigate("/loser")
        };
      }, 3000);
    }
  };
  */
  return (
    <div className="run">
      <div>
        <p className="runtitle">Hello</p>
      </div>
    </div>
  );
}

export default RunPage;
