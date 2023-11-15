import { useState, useContext } from "react";
import HeroLoaderContext from "../contexts/HeroLoaderContext";
import FightButton from "../components/FightButton";
import HealthBar from "../components/HealthBar";

function FightPage() {
  const { selectHero1, selectHero2 } = useContext(HeroLoaderContext);

  const [progressLife, setProgressLife] = useState(0);
  const [progressLife2, setProgressLife2] = useState(0);

  return (
    <div className="fightPage">
      <div className="logoBox">
        <img
          className="logoFight"
          src="/images/logo_projet2.png"
          alt="Logo Clash Heroes"
        />
      </div>
      <HealthBar
        selectHero1={selectHero1}
        selectHero2={selectHero2}
        value={progressLife}
        value2={progressLife2}
      />
      <FightButton
        setProgressLife={setProgressLife}
        setProgressLife2={setProgressLife2}
        selectHero1={selectHero1}
        selectHero2={selectHero2}
      />
    </div>
  );
}

export default FightPage;
