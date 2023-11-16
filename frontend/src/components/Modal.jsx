import React from "react";
import { PropTypes } from "prop-types";

function Modal({ isOpenModal, handleModal }) {
  return (
    <div
      className={`modalContainer ${
        isOpenModal === true ? "openModal" : "closeModal"
      }`}
    >
      <span className="settings">
        <button
          aria-label="button"
          type="button"
          className="cross"
          onClick={handleModal}
        />
        <h4>Good morning.</h4>
        <p>
          Welcome to our game “Clash Heroes”. The game compares different skill
          statistics of well-known characters ("speed, strength, intelligence").
        </p>
        <p>The action is divided into 3 interactive mini games.</p>
        <p>
          Game 1: Strength 1. Choose your hero. 2. Choose your competitor. 3.
          Press the "fight" button to start the fight.
        </p>
        <p>
          Game 2: Intelligence Your fighters will compete in a bomb defusing
          test.
        </p>
        <p>Game 3: Speed Your fighters will compete in a speed test.</p>
        <p> At the end of these tests only one will remain.</p>
        <p>For your safety.</p>
        <p>
          Some people are sensitive to lights and flashing or flickering
          geometric shapes and patterns, may have epilepsy without knowing it,
          and have epileptic seizures when playing video games or watching video
          content. If you feel the slightest fatigue, consider taking a break.
        </p>
        PS: Sorry Lucas, there is no Little Mac.
      </span>
    </div>
  );
}
Modal.propTypes = {
  isOpenModal: PropTypes.bool.isRequired,
  handleModal: PropTypes.func.isRequired,
};
export default Modal;
