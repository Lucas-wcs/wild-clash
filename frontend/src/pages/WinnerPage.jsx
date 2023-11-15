import { useNavigate } from "react-router-dom";
import useWindowSize from "react-use/lib/useWindowSize";
import { useRef, useEffect, useContext } from "react";
import Confetti from "react-confetti";
import HeroLoaderContext from "../contexts/HeroLoaderContext";

function WinnerPage() {
  const { selectHero1 } = useContext(HeroLoaderContext);
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
        <img src={selectHero1} alt="winner" />
      </div>

      <div className="secondContainer">
        <p className="firstText">You Win !</p>
        <div
          className="firstButton"
          onClick={handleNewGame}
          role="presentation"
        >
          <button type="button" className="btn">
            <span />
            <p
              data-start="good luck!"
              data-text="start!"
              data-title="new game"
            />
          </button>
        </div>
        {/* <button type="button" className="firstButton" onClick={handleNewGame}>
          New Game
        </button> */}
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
