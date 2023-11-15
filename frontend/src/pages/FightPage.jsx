import { useContext } from "react";
import HeroLoaderContext from "../contexts/HeroLoaderContext";
import FightButton from "../components/FightButton";
import HealthBar from "../components/HealthBar";

function FightPage() {
  const { selectHero1, selectHero2, setSaveWinner } =
    useContext(HeroLoaderContext);

  return (
    <div className="fightPage">
      <div className="logoBox">
        <img
          className="logoFight"
          src="/images/logo_projet2.png"
          alt="Logo Clash Heroes"
        />
      </div>
      <HealthBar selectHero1={selectHero1} selectHero2={selectHero2} />
      <FightButton
        selectHero1={selectHero1}
        selectHero2={selectHero2}
        setSaveWinner={setSaveWinner}
      />
    </div>
  );
}

export default FightPage;
