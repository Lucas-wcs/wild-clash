import { useNavigate, useLocation } from "react-router-dom";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";

function WinnerPage() {
  const location = useLocation();
  const urlImgFighter1 = location.state.imgFighter1;
  const navigate = useNavigate();

  const handleNewGame = () => {
    navigate("/chooseFighter");
  };

  const { width, height } = useWindowSize();

  return (
    <div className="firstContainer">
      <Confetti width={width} height={height} />
      <div>
        <img src={urlImgFighter1} alt="winner" />
        <div className="secondContainer">
          <p className="firstText">You Win !</p>
          <button type="button" className="firstButton" onClick={handleNewGame}>
            New Game
          </button>
        </div>
      </div>
      <div className="logo" />
    </div>
  );
}

export default WinnerPage;
