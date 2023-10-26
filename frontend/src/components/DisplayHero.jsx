import PropTypes from "prop-types";

function DisplayHero({
  url,
  name,
  selectHero1,
  setSelectHero1,
  setSelectHero2,
}) {
  function handleSelected() {
    if (selectHero1 === "") {
      setSelectHero1(url);
    } else {
      setSelectHero2(url);
    }
  }

  return (
    <button type="button" className="choiceHero" onClick={handleSelected}>
      <img key={url} className="sizeChooseFighter" src={url} alt={name} />
    </button>
  );
}

DisplayHero.propTypes = {
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  selectHero1: PropTypes.string.isRequired,
  setSelectHero1: PropTypes.string.isRequired,
  setSelectHero2: PropTypes.string.isRequired,
};

export default DisplayHero;
