import { useNavigate } from "react-router-dom";
import { PropTypes } from "prop-types";
import { useState } from "react";
import HeroesCard from "../components/HeroesCard";

function ChooseFighter() {
  const [selectHero1, setSelectHero1] = useState("");
  const [selectHero2, setSelectHero2] = useState("");
  const navigate = useNavigate();
  const handlePage = () => {
    navigate("/fight");
  };

  return (
    <div>
      <div className="BoxParent">
        {selectHero1 === "" ? (
          ""
        ) : (
          <div className="displayHeroesSelected">
            <img
              className="selectHero1 boxSelected"
              src={selectHero1}
              alt="fighter1"
            />
          </div>
        )}
        {selectHero1 !== "" ? <p className="vs">VS</p> : ""}

        {selectHero2 === "" ? (
          ""
        ) : (
          <div>
            <img
              className="selectHero2 boxSelected"
              src={selectHero2}
              alt="fighter2"
            />
          </div>
        )}
      </div>

      {selectHero1 !== "" && selectHero2 !== "" ? (
        <button type="button" className="buttonFight" onClick={handlePage}>
          Fight
        </button>
      ) : (
        ""
      )}

      <HeroesCard
        selectHero1={selectHero1}
        selectHero2={selectHero2}
        setSelectHero1={setSelectHero1}
        setSelectHero2={setSelectHero2}
      />
    </div>
  );
}

ChooseFighter.propTypes = {
  heros: PropTypes.arrayOf(PropTypes.string).isRequired,
}.isRequired;

export default ChooseFighter;
