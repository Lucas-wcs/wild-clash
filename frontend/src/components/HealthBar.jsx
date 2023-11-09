import { motion, animate } from "framer-motion";
import { PropTypes } from "prop-types";
import { useState, useEffect, useRef } from "react";
import { useRouteLoaderData } from "react-router-dom";

function HealthBar({ value, value2, imgFighter1, imgFighter2 }) {
  const progressTextRef = useRef(null);
  const progressTextRef2 = useRef(null);

  const heroes = useRouteLoaderData("app");
  const [heroName1, setHeroName1] = useState("");
  const [heroName2, setHeroName2] = useState("");
  useEffect(() => {
    const hero1 = heroes.find((hero) => hero.data.image.url === imgFighter1);
    const hero2 = heroes.find((hero) => hero.data.image.url === imgFighter2);
    if (hero1 && hero2) {
      setHeroName1(hero1.data.name);
      setHeroName2(hero2.data.name);
    }
  }, [heroes, imgFighter1, imgFighter2]);

  useEffect(() => {
    if (progressTextRef.current != null) {
      animate(0, value, {
        duration: 2.5,
        onUpdate: (pv) => {
          progressTextRef.current.textContent = pv.toFixed(0);
        },
      });
    }
  }, [value]);

  useEffect(() => {
    if (progressTextRef2.current != null) {
      animate(0, value2, {
        duration: 2.5,
        onUpdate: (pv) => {
          progressTextRef2.current.textContent = pv.toFixed(0);
        },
      });
    }
  }, [value2]);

  return (
    <div className="healthBar">
      <div className="namePlayers">
        <div className="nameHero">{heroName1}</div>
        <div className="nameEnemy">{heroName2}</div>
      </div>

      <div className="healthBar2players">
        <div className="healthBar1Player">
          <div className="healthBarContainer">
            <div className="levelhealthBar">
              <motion.div
                className="bar"
                animate={{
                  width: `${value}%`,
                }}
                transition={{
                  duration: 2.5,
                }}
              />
            </div>
          </div>
          <div className="textLevelHealthBar">
            <p ref={progressTextRef}>0</p>
            <p>pv</p>
          </div>
        </div>

        <div className="healthBar1Player">
          <div className="textLevelHealthBar">
            <p ref={progressTextRef2}>0</p>
            <p className="lastP">pv</p>
          </div>
          <div className="healthBarContainer">
            <div className="levelhealthBar">
              <motion.div
                className="bar"
                animate={{
                  width: `${value2}%`,
                }}
                transition={{
                  duration: 2.5,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

HealthBar.propTypes = {
  value: PropTypes.number.isRequired,
  value2: PropTypes.number.isRequired,
  imgFighter1: PropTypes.string.isRequired,
  imgFighter2: PropTypes.string.isRequired,
};

export default HealthBar;
