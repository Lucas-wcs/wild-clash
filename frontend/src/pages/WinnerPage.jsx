import { useNavigate, useLocation } from "react-router-dom";
import useWindowSize from "react-use/lib/useWindowSize";
import { useRef, useEffect } from "react";
import Confetti from "react-confetti";

function WinnerPage() {
  const location = useLocation();
  const urlImgFighter1 = location.state.imgFighter1;
  const navigate = useNavigate();

  const handleNewGame = () => {
    navigate("/chooseFighter");
  };

  const { width, height } = useWindowSize();
  const audio = useRef(null);

  useEffect(() => {
    audio.current.muted = false;
    audio.current.play();
  }, [audio]);

  // const button = useRef(null);
  return (
    <div className="firstContainer">
      <Confetti width={width} height={height} />

      <div className="img-winner">
        <img src={urlImgFighter1} alt="winner" />
      </div>

      <div className="secondContainer">
        <p className="firstText">You Win !</p>
        <button type="button" className="firstButton" onClick={handleNewGame}>
          New Game
        </button>
      </div>

      <div className="logo" />
      <audio ref={audio} muted>
        <track kind="captions" />
        <source src="/sons/applausSound.mp3" type="audio/mp3" />
      </audio>
    </div>
  );
}

export default WinnerPage;
