import React from "react";
import { NavLink } from "react-router-dom";

function WikiButton() {
  return (
    <div className="wikibutton">
      <ul className="align">
        <li>
          <figure className="book">
            <ul className="hardcover_front">
              <li>
                <div className="coverDesign blue">
                  <h1>WIKI</h1>
                  <p>HERO</p>
                </div>
              </li>
              <li />
            </ul>

            <ul className="page">
              <li />
              <li>
                <NavLink to="/wikihero" className="wiki">
                  <p>?</p>
                </NavLink>
              </li>
              <li />
              <li />
              <li />
            </ul>

            <ul className="hardcover_back">
              <li />
              <li />
            </ul>
            <ul className="book_spine">
              <li />
              <li />
            </ul>
          </figure>
        </li>
      </ul>
    </div>
  );
}

export default WikiButton;
