import { useLocation } from "react-router-dom";
import FightButton from "../components/FightButton";

// import HealthBar from "../components/HealthBar";

function FightPage() {
  const location = useLocation();
  const imgFighter1 = location.state.selectHero1;
  const imgFighter2 = location.state.selectHero2;

  return (
    <div className="fightPage">
      <div className="logoBox">
        <img
          className="logoFight"
          src="/public/images/logo_projet2.png"
          alt="Logo Clash Heroes"
        />
      </div>
      {/* <HealthBar /> */}
      <FightButton imgFighter1={imgFighter1} imgFighter2={imgFighter2} />
    </div>
  );
}

export default FightPage;
