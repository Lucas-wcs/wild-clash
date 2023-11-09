import PropTypes from "prop-types";

function WikiPicture({ url1, name1, handleFlip }) {
  return (
    <div className="wikiPicture" onClick={handleFlip} role="presentation">
      <img src={url1} alt={name1} />
    </div>
  );
}

WikiPicture.propTypes = {
  url1: PropTypes.string.isRequired,
  name1: PropTypes.string.isRequired,
  handleFlip: PropTypes.string.isRequired,
};

export default WikiPicture;
