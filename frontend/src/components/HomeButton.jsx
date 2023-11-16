import { useContext } from "react";
import { NavLink } from "react-router-dom";
import HeroLoaderContext from "../contexts/HeroLoaderContext";

function HomeButton() {
  const { setSaveLoser, setProgressLife, setProgressLife2, setSaveWinner } =
    useContext(HeroLoaderContext);

  function handleReset() {
    setProgressLife(0);
    setProgressLife2(0);
    setSaveWinner(0);
    setSaveLoser(0);
  }

  return (
    <div>
      <NavLink className="homebutton" to="/">
        <div className="shadow">
          <img
            src="/images/LogoHomeButton.png"
            onClick={handleReset}
            role="presentation"
            alt="Home"
          />
        </div>
      </NavLink>
    </div>
  );
}

export default HomeButton;
