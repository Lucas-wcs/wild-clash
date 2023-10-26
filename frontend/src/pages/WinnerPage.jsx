import { useLocation } from "react-router-dom";

function WinnerPage() {
  const location = useLocation();
  const urlImgFighter1 = location.state.imgFighter1;

  return (
    <div className="firstContainer">
      <div>
        <img src={urlImgFighter1} alt="winner" />
        <div className="secondContainer">
          <p className="firstText">You Win !</p>
          <button type="button" className="firstButton">
            New Game
          </button>
        </div>
      </div>
      <div className="logo">
        {/* <a href="#"> */}
        {/* <img src="../public/images/logo2_1-removebg-preview 3.png" alt="BoutonHome" /> */}
        {/* </a> */}
      </div>
    </div>
  );
}

export default WinnerPage;
