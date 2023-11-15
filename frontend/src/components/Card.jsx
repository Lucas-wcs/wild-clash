import PropTypes from "prop-types";
import ReactCardFlip from "react-card-flip";
import { useState } from "react";
import WikiCard from "./WikiCard";
import WikiPicture from "./WikiPicture";

function Card({ hero }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped((prev) => !prev);
  };

  return (
    <div className="card">
      <ReactCardFlip
        isFlipped={isFlipped}
        flipDirection="horizontal"
        key={hero.data.name}
      >
        <WikiPicture
          url1={hero.data.image.url}
          name1={hero.data.name}
          handleFlip={handleFlip}
        />
        <WikiCard
          name={hero.data.name}
          fullname={hero.data.biography["full-name"]}
          alias={hero.data.biography.aliases[0]}
          birth={hero.data.biography["place-of-birth"]}
          intelligence={hero.data.powerstats.intelligence}
          durability={hero.data.powerstats.durability}
          strength={hero.data.powerstats.strength}
          power={hero.data.powerstats.power}
          speed={hero.data.powerstats.speed}
          combat={hero.data.powerstats.combat}
          handleFlip={handleFlip}
        />
      </ReactCardFlip>
    </div>
  );
}

Card.propTypes = {
  hero: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default Card;
