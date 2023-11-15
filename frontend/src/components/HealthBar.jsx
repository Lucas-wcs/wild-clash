import { motion, animate } from "framer-motion";
import { PropTypes } from "prop-types";
import { useState, useEffect, useRef, useContext } from "react";
import { useRouteLoaderData } from "react-router-dom";
import HeroLoaderContext from "../contexts/HeroLoaderContext";

function HealthBar({ selectHero1, selectHero2 }) {
  const { progressLife, progressLife2 } = useContext(HeroLoaderContext);
  const progressTextRef = useRef(null);
  const progressTextRef2 = useRef(null);
  const heroes = useRouteLoaderData("app");
  const [heroName1, setHeroName1] = useState("");
  const [heroName2, setHeroName2] = useState("");

  useEffect(() => {
    const hero1 = heroes.find((hero) => hero.data.image.url === selectHero1);
    const hero2 = heroes.find((hero) => hero.data.image.url === selectHero2);
    if (hero1 && hero2) {
      setHeroName1(hero1.data.name);
      setHeroName2(hero2.data.name);
    }
  }, [heroes, selectHero1, selectHero2]);

  useEffect(() => {
    if (progressTextRef.current != null) {
      animate(0, progressLife, {
        duration: 2.5,
        onUpdate: (pv) => {
          if (progressTextRef.current != null) {
            progressTextRef.current.textContent = pv.toFixed(0);
          }
        },
      });
    }
  }, [progressLife]);

  useEffect(() => {
    if (progressTextRef2.current != null) {
      animate(0, progressLife2, {
        duration: 2.5,
        onUpdate: (pv) => {
          if (progressTextRef2.current != null) {
            progressTextRef2.current.textContent = pv.toFixed(0);
          }
        },
      });
    }
  }, [progressLife2]);

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
                  width: `${progressLife}%`,
                }}
                transition={{
                  duration: 2.5,
                }}
              />
            </div>
          </div>
          <div className="textLevelHealthBar">
            <p ref={progressTextRef}>0</p>
          </div>
        </div>
        <img src="./public/images/VS.png" alt="Bouton Versus" />
        <div className="healthBar1Player">
          <div className="textLevelHealthBar">
            <p ref={progressTextRef2}>0</p>
          </div>
          <div className="healthBarContainer">
            <div className="levelhealthBar">
              <motion.div
                className="bar"
                animate={{
                  width: `${progressLife2}%`,
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
  selectHero1: PropTypes.string.isRequired,
  selectHero2: PropTypes.string.isRequired,
};

export default HealthBar;
