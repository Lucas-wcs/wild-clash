import { useLocation } from "react-router-dom";
import { useState } from "react";
import FightButton from "../components/FightButton";
import HealthBar from "../components/HealthBar";

function FightPage() {
  const location = useLocation();
  const imgFighter1 = location.state.selectHero1;
  const imgFighter2 = location.state.selectHero2;

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
        imgFighter1={imgFighter1}
        imgFighter2={imgFighter2}
        value={progressLife}
        value2={progressLife2}
      />
      <FightButton
        setProgressLife={setProgressLife}
        setProgressLife2={setProgressLife2}
        imgFighter1={imgFighter1}
        imgFighter2={imgFighter2}
      />
    </div>
  );
}

export default FightPage;
