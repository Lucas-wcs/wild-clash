import { motion } from "framer-motion";
import { PropTypes } from "prop-types";

function HealthBar({ value }) {
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
      <div className="healthBarContainer">
        <div className="levelhealthBar">
          <motion.div className="bar" />
        </div>
      </div>
    </div>
  );
}

HealthBar.propTypes = {
  value: PropTypes.number.isRequired,
};

export default HealthBar;
