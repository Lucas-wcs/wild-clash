import PropTypes from "prop-types";

function DisplayHero({
  url,
  name,
  selectHero1,
  selectHero2,
  setSelectHero1,
  setSelectHero2,
}) {
  function handleSelected() {
    if (selectHero1 === "") {
      if (selectHero2 !== url) {
        setSelectHero1(url);
      }
    } else if (selectHero1 !== url) {
      setSelectHero2(url);
    }
  }

  return (
    <button
      type="button"
      className={`choiceHero ${
        selectHero1 === url || selectHero2 === url ? "greyPerso" : ""
      }`}
      onClick={handleSelected}
    >
      <img key={url} className="sizeChooseFighter" src={url} alt={name} />
    </button>
  );
}

DisplayHero.propTypes = {
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  selectHero1: PropTypes.string.isRequired,
  selectHero2: PropTypes.string.isRequired,
  setSelectHero1: PropTypes.func.isRequired,
  setSelectHero2: PropTypes.func.isRequired,
};

export default DisplayHero;
