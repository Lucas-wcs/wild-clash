import React, { useState, useRef } from "react";
import LaunchButton from "../components/LaunchButton";
import WikiButton from "../components/WikiButton";
import Modal from "../components/Modal";

function Home() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isOpenCurtain, setIsOpenCurtain] = useState(false);
  const [isFlash, setIsFlash] = useState("");
  const audio = useRef(null);
  const button = useRef(null);

  function handleCurtain() {
    setIsOpenCurtain(!isOpenCurtain);
    setTimeout(() => {
      setIsFlash("flash");
    }, 500);
    setTimeout(() => {
      audio.current.muted = false;
      audio.current.play();
    }, 1000);
  }
  function handleModal() {
    if (isOpenModal) {
      setIsOpenModal((current) => !current);
    } else {
      setIsOpenModal((current) => !current);
    }
  }

  return (
    <div className={`home ${isFlash}`}>
      <div className="curtain">
        <div
          className={`curtain-panel-left ${
            isOpenCurtain ? "openAnimationL" : "closeAnimationL"
          }`}
        >
          <button
            type="button"
            onClick={handleCurtain}
            className="logo-1"
            ref={button}
          >
            <img
              className="logoButtonL"
              src="./public/images/logo_1-1.png"
              alt=""
            />
          </button>
        </div>

        <div
          className={`curtain-panel-right ${
            isOpenCurtain ? "openAnimationR" : "closeAnimationR"
          }`}
        >
          <button type="button" onClick={handleCurtain} className="logo-2">
            <audio className="storm" ref={audio} muted>
              <track kind="captions" />
              <source src="/sons/tonnerre.mp3" type="audio/mp3" />
            </audio>
            <img
              className="logoButtonR"
              src="./public/images/logo_2.png"
              alt=""
            />
          </button>
        </div>
      </div>
      <div className={`home2 ${isFlash}`}>
        <img
          className="homelogo"
          src="public/images/homeLogo.png"
          alt="homeLogo"
        />
        <LaunchButton className="launchbutton" />
        <WikiButton className="wikiButton" />

        <button type="button" className="buttonParametre" onClick={handleModal}>
          Settings
        </button>

        <Modal handleModal={() => handleModal()} isOpenModal={isOpenModal} />
      </div>
    </div>
  );
}

export default Home;
