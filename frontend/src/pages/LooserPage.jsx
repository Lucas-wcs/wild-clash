import { useNavigate, useLocation } from "react-router-dom";
import { useRef, useEffect } from "react";

function WinnerPage() {
  const location = useLocation();
  const urlImgFighter1 = location.state.imgFighter1;
  const navigate = useNavigate();
  const audio = useRef(null);

  const handleNewGame = () => {
    navigate("/chooseFighter");
  };

  useEffect(() => {
    audio.current.muted = false;
    audio.current.play();
  }, [audio]);

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
      <audio ref={audio} muted>
        <track kind="captions" />
        <source src="/sons/ouh.mp3" type="audio/mp3" />
      </audio>
    </div>
  );
}

export default WinnerPage;
