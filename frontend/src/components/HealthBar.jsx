import { motion, animate } from "framer-motion";
import { PropTypes } from "prop-types";
import { useEffect, useRef } from "react";

function HealthBar({ value, value2 }) {
  const progressTextRef = useRef(null);
  const progressTextRef2 = useRef(null);

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
      <div className="textLevelHealthBar">
        <p ref={progressTextRef2}>0</p>
        <p>pv</p>
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
  );
}

HealthBar.propTypes = {
  value: PropTypes.number.isRequired,
  value2: PropTypes.number.isRequired,
};

export default HealthBar;
