import PropTypes from "prop-types";
import ReactCardFlip from "react-card-flip";
import { useState, useRef } from "react";
import WikiCard from "./WikiCard";
import WikiPicture from "./WikiPicture";

function Card({
  name,
  url,
  fullname,
  aliases,
  birth,
  intelligence,
  durability,
  strength,
  power,
  speed,
  combat,
}) {
  const [isFlipped, setIsFlipped] = useState(false);
  const audio = useRef(null);
  const handleFlip = () => {
    if (audio.current) {
      audio.current.muted = false;
      audio.current.play();
    }

    setIsFlipped((prev) => !prev);
  };

  return (
    <div className="card">
      <audio ref={audio} muted>
        <track kind="captions" />
        <source src="public/sons/flipcard-91468.mp3" type="audio/mp3" />
      </audio>
      <ReactCardFlip
        isFlipped={isFlipped}
        flipDirection="horizontal"
        key={name}
      >
        <WikiPicture url1={url} name1={name} handleFlip={handleFlip} />
        <WikiCard
          name={name}
          fullname={fullname}
          alias={aliases}
          birth={birth}
          intelligence={intelligence}
          durability={durability}
          strength={strength}
          power={power}
          speed={speed}
          combat={combat}
          handleFlip={handleFlip}
        />
      </ReactCardFlip>
    </div>
  );
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  fullname: PropTypes.string.isRequired,
  aliases: PropTypes.string.isRequired,
  birth: PropTypes.string.isRequired,
  intelligence: PropTypes.string.isRequired,
  durability: PropTypes.string.isRequired,
  strength: PropTypes.string.isRequired,
  power: PropTypes.string.isRequired,
  speed: PropTypes.string.isRequired,
  combat: PropTypes.string.isRequired,
};

export default Card;
