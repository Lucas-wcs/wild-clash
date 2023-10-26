import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

function LaunchButton() {
  const audio = useRef(null);
  const button = useRef(null);

  const navigate = useNavigate();

  const handleDelayedNavigation = () => {
    audio.current.muted = false;
    audio.current.play();
    setTimeout(() => {
      navigate("/choosefighter");
    }, 2000);
  };

  return (
    <div>
      <button
        type="button"
        onClick={handleDelayedNavigation}
        className="launch"
        ref={button}
      >
        {" "}
        <span>Launch the fight</span>
      </button>
      <audio ref={audio} muted>
        <track kind="captions" />
        <source src="/sons/tonnerre.mp3" type="audio/mp3" />
      </audio>
    </div>
  );
}

export default LaunchButton;
