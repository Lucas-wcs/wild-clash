import { useNavigate, useRouteLoaderData } from "react-router-dom";
import { PropTypes } from "prop-types";
import { useState, useEffect } from "react";
import HeroesCard from "../components/HeroesCard";

function ChooseFighter() {
  const allHeroes = useRouteLoaderData("app");
  const [selectHero1, setSelectHero1] = useState("");
  const [selectHero2, setSelectHero2] = useState("");
  const navigate = useNavigate();
  const handlePage = () => {
    navigate("/fight", {
      state: { selectHero1, selectHero2 },
    });
  };
  const [heroName1, setHeroName1] = useState("");
  const [heroName2, setHeroName2] = useState("");
  useEffect(() => {
    const hero1 = allHeroes.find((hero) => hero.data.image.url === selectHero1);
    const hero2 = allHeroes.find((hero) => hero.data.image.url === selectHero2);
    if (hero1) {
      setHeroName1(hero1.data.name);
    }
    if (hero2) {
      setHeroName2(hero2.data.name);
    }
  }, [allHeroes, selectHero1, selectHero2]);

  function handleDeclick() {
    if (selectHero1) {
      setSelectHero1("");
    }
  }

  function handleDeclickBox() {
    if (selectHero2) {
      setSelectHero2("");
    }
  }

  return (
    <div className="ChooseFighter">
      <h1 className="titlePage">Choose Your Hero</h1>
      <div className="BoxParent">
        <div className="fighterContainer">
          {selectHero1 === "" ? (
            <div className="boxSelected">
              <div className="inlineDiv" />
            </div>
          ) : (
            <div className="displayHeroesSelected">
              <img
                className="selectHero1 boxSelected"
                onClick={handleDeclick}
                role="presentation"
                src={selectHero1}
                alt="fighter1"
              />
              <div className="namePersoLeft">{heroName1}</div>
            </div>
          )}
          <p className="vs">VS</p>

          {selectHero2 === "" ? (
            <div className="boxSelected">
              <div className="inlineDiv" />
            </div>
          ) : (
            <div>
              <img
                className="selectHero2 boxSelected"
                onClick={handleDeclickBox}
                role="presentation"
                src={selectHero2}
                alt="fighter2"
              />
              <div className="namePersoRight">{heroName2}</div>
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
      </div>
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
