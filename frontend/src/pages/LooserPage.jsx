import { useNavigate, useLocation } from "react-router-dom";

function WinnerPage() {
  const location = useLocation();
  const urlImgFighter1 = location.state.imgFighter1;
  const navigate = useNavigate();

  const handleNewGame = () => {
    navigate("/chooseFighter");
  };

  return (
    <div className="firstContainer2">
      <div className="img-winner2">
        <img src={urlImgFighter1} alt="loser" />
      </div>

      <div className="secondContainer2">
        <p className="firstText2">You Lose !</p>
        <button type="button" className="firstButton2" onClick={handleNewGame}>
          New Game
        </button>
      </div>

      <div className="logo" />
    </div>
  );
}

export default WinnerPage;
