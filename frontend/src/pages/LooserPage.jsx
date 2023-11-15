import { useNavigate } from "react-router-dom";
import { useRef, useEffect, useContext } from "react";
import HeroLoaderContext from "../contexts/HeroLoaderContext";

function WinnerPage() {
  const { selectHero1 } = useContext(HeroLoaderContext);
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
        <img src={selectHero1} alt="loser" />
      </div>

      <div className="secondContainer2">
        <p className="firstText2">You Lose !</p>
        <div
          className="firstButton2"
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
        {/* <button type="button" className="firstButton2" onClick={handleNewGame}>
          New Game
        </button> */}
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
