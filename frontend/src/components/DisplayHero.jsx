import PropTypes from "prop-types";

function DisplayHero({ url, name }) {
  return (
    <div>
      <img src={url} alt={name} />
    </div>
  );
}

DisplayHero.propTypes = {
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default DisplayHero;
