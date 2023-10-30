import React from "react";
import PropTypes from "prop-types";
import { useRouteLoaderData } from "react-router-dom";
import DisplayHero from "./DisplayHero";

function HeroesCard({
  selectHero1,
  selectHero2,
  setSelectHero1,
  setSelectHero2,
}) {
  const allHeroes = useRouteLoaderData("app");

  return (
    <div>
      <div className="contenerImage">
        {allHeroes.map((her) => (
          <DisplayHero
            selectHero1={selectHero1}
            selectHero2={selectHero2}
            setSelectHero1={setSelectHero1}
            setSelectHero2={setSelectHero2}
            key={her.data.name}
            url={her.data.image.url}
            name={her.data.name}
          />
        ))}
      </div>
    </div>
  );
}

HeroesCard.propTypes = {
  selectHero1: PropTypes.string.isRequired,
  setSelectHero1: PropTypes.string.isRequired,
  setSelectHero2: PropTypes.string.isRequired,
  selectHero2: PropTypes.string.isRequired,
};
export default HeroesCard;
