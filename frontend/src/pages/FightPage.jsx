import FightButton from "../components/FightButton";
import HealthBar from "../components/HealthBar";

function FightPage() {
  return (
    <div className="fightPage">
      <div className="logoFight">Logo</div>
      <HealthBar />
      <FightButton />
    </div>
  );
}

export default FightPage;
