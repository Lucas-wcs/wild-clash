import React, { useEffect, useState, useMemo, useLayoutEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import HeroLoaderContext from "./contexts/HeroLoaderContext";
import Header from "./components/Header";
import useScreenOrientation from "./components/useScreenOrientation";

function App() {
  useEffect(() => {
    // Liste des fichiers à précharger
    const imageUrls = [
      "images/arenecombat.png",
      "images/Battles_Iron_Man_hero_500524_1.jpg",
      "images/Battles_Iron_Man_hero_500524_2.jpg",
      "images/Bomb.png",
      "images/filterHeroes.png",
      "images/filterVilain.png",
      "images/fond_choice_perso.jpg",
      "images/homeLogo.png",
      "images/homePage.png",
      "images/logo_1-1.png",
      "images/logo_2.png",
      "images/logo_projet2.png",
      "images/logo2_1-removebg-preview 3.png",
      "images/LogoHomeButton.png",
      "images/medaille.png",
      "images/ringboxe.jpeg",
      "images/runbackground.png",
      "images/runbomb.png",
      "images/RunPage.png",
      "images/VS.png",
      "images/Wiki_Heroes.png",
      "images/wiki.png",
    ];
    const audioUrls = [
      "sons/3-2-1-go!-smash-ultimate-made-with-Voicemod-technology.mp3",
      "sons/applausSound.mp3",
      "sons/Deja_vu.mp3",
      "sons/elevator-music-bossa-nova-background-music-version-60s-10900.mp3",
      "sons/epic-extreme-short-109130.mp3",
      "sons/fight-deep-voice-172194.mp3",
      "sons/flipcard-91468.mp3",
      "sons/metal-shutter-64688_pzt8IXs8.mp3",
      "sons/Mission-Impossible.mp3",
      "sons/ouh.mp3",
      "sons/se_common_finishhit.mp3",
      "sons/techno-syndrome-mortal-kombat-song-by-the-immortals_NaxR0wNS.mp3",
      "sons/tic-tac.mp3",
      "sons/tonnerre.mp3",
    ];

    // Fonction pour précharger une image
    const preloadImage = (url) => {
      const img = new Image();
      img.src = url;
    };

    // Fonction pour précharger un son
    const preloadAudio = (url) => {
      const audio = new Audio();
      audio.src = url;
    };

    // Préchargement des images
    imageUrls.forEach((url) => {
      preloadImage(url);
    });

    // Préchargement des sons
    audioUrls.forEach((url) => {
      preloadAudio(url);
    });
  }, []);
  const orientation = useScreenOrientation();
  const [selectHero1, setSelectHero1] = useState("");
  const [selectHero2, setSelectHero2] = useState("");
  const [saveWinner, setSaveWinner] = useState(0);
  const [saveLoser, setSaveLoser] = useState(0);
  const [progressLife, setProgressLife] = useState(0);
  const [progressLife2, setProgressLife2] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();
  useLayoutEffect(() => {
    if (location.pathname !== "/") {
      navigate("/");
    }
  }, []);

  const valueOfContext = useMemo(() => {
    return {
      saveLoser,
      setSaveLoser,
      selectHero1,
      setSelectHero1,
      selectHero2,
      setSelectHero2,
      saveWinner,
      setSaveWinner,
      progressLife,
      setProgressLife,
      progressLife2,
      setProgressLife2,
    };
  }, [
    saveLoser,
    setSaveLoser,
    selectHero1,
    selectHero2,
    setSelectHero1,
    setSelectHero2,
    saveWinner,
    setSaveWinner,
    progressLife,
    setProgressLife,
    progressLife2,
    setProgressLife2,
  ]);

  return (
    <HeroLoaderContext.Provider value={valueOfContext}>
      <div className="app">
        {orientation === "portrait-primary" ? (
          <div className="orientationPortrait">
            <img
              className="logoClash"
              src="../images/homeLogo.png"
              alt="logo Clash Heroes"
            />
            <div className="arrowRound" />
            <p>
              Afin de mieux profiter du jeu, merci de tourner votre appareil.
            </p>
          </div>
        ) : (
          <div className="body">
            <div className="header">
              <Header />
            </div>
            <Outlet />
          </div>
        )}
      </div>
    </HeroLoaderContext.Provider>
  );
}
export default App;
