import PropTypes from "prop-types";

function WikiCard({
  name,
  fullname,
  alias,
  birth,
  intelligence,
  durability,
  strength,
  power,
  speed,
  combat,
  handleFlip,
}) {
  return (
    <div className="wikiCard" onClick={handleFlip} role="presentation">
      <div className="wikiCard-top">
        <h6>{name}</h6>
        <h5>Full name :</h5>
        {fullname !== "-" ? <p>{fullname}</p> : <p>???</p>}
        <h5>Alias :</h5>
        {alias !== "-" ? <p>{alias}</p> : <p>???</p>}
        <h5>Place of birth :</h5>
        {birth !== "-" ? <p>{birth}</p> : <p>???</p>}
      </div>
      <div className="wikiCard-bottom">
        <h6>Stats</h6>
        <div className="wikiCard-bottom-bis">
          <div className="wikiCard-bottom-1">
            <label htmlFor="intelligence">intelligence :</label>
            <meter
              id="intelligence"
              min="0"
              max="100"
              low="33"
              high="66"
              optimum="80"
              value={intelligence}
            >
              at 50/100
            </meter>
            <label htmlFor="durability">Durability :</label>
            <meter
              id="durability"
              min="0"
              max="100"
              low="33"
              high="66"
              optimum="80"
              value={durability}
            >
              at 50/100
            </meter>
            <label htmlFor="strength">Strength :</label>
            <meter
              id="dstrength"
              min="0"
              max="100"
              low="33"
              high="66"
              optimum="80"
              value={strength}
            >
              at 50/100
            </meter>
          </div>
          <div className="wikiCard-bottom-2">
            <label htmlFor="power">Power :</label>
            <meter
              id="power"
              min="0"
              max="100"
              low="33"
              high="66"
              optimum="80"
              value={power}
            >
              at 50/100
            </meter>
            <label htmlFor="speed">Speed :</label>
            <meter
              id="speed"
              min="0"
              max="100"
              low="33"
              high="66"
              optimum="80"
              value={speed}
            >
              at 50/100
            </meter>
            <label htmlFor="combat">Combat :</label>
            <meter
              id="combat"
              min="0"
              max="100"
              low="33"
              high="66"
              optimum="80"
              value={combat}
            >
              at 50/100
            </meter>
          </div>
        </div>
      </div>
    </div>
  );
}

WikiCard.propTypes = {
  name: PropTypes.string.isRequired,
  fullname: PropTypes.string.isRequired,
  alias: PropTypes.string.isRequired,
  birth: PropTypes.string.isRequired,
  intelligence: PropTypes.number.isRequired,
  durability: PropTypes.number.isRequired,
  strength: PropTypes.number.isRequired,
  power: PropTypes.number.isRequired,
  speed: PropTypes.number.isRequired,
  combat: PropTypes.number.isRequired,
  handleFlip: PropTypes.string.isRequired,
};

export default WikiCard;
