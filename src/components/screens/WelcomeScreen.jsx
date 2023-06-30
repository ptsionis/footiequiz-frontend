import React from "react";

import "./WelcomeScreen.css";
import { screenClassName } from "../../screenClassName";
import { Screen } from "../../App";

import favicon from "/favicon.png";

export default function WelcomeScreen(props) {
  const changeScreen = () => {
    props.setCurrentScreen(Screen.rooms);
  };

  return (
    <div className={screenClassName}>
      <img src={favicon} style={{ width: "250px" }} />
      <button
        type="button"
        className="btn btn-primary my-5 fs-3 py-2 px-4 text-light fw-bold"
        onClick={() => changeScreen()}
      >
        ΕΝΑΡΞΗ
      </button>
      <div className="vw-100 d-flex justify-content-center py-2 bottom-0 position-fixed bg-primary">
        <span className="text-center text-light created-by">CREATED BY </span>
        <a
          href="https://ptsionis.gr/"
          className="mx-2 text-light footer-name"
          target="_blank"
        >
          PANAGIOTIS TSIONIS
        </a>
      </div>
    </div>
  );
}
