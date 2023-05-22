import React from "react";

import { screenClassName } from "../../screenClassName";

import "./ThrophyScreen.css";

import mun from "/images/trophies/trophy_mun.png";
import chl from "/images/trophies/trophy_chl.png";
import eul from "/images/trophies/trophy_eul.png";
import col from "/images/trophies/trophy_col.png";
import retire from "/images/trophies/trophy_retire.png";

export default function TrophyScreen(props) {

  return props.finalMyScore > 38 ? (
    <div className={screenClassName}>
      <p
        className={
          "text-center fs-1 mb-4 text-secondary fw-bold text-" + (props.finalMyScore > props.finalOpponentScore
            ? "success" : props.finalMyScore < props.finalOpponentScore ? "danger" : "warning")
        }
      >
        {props.finalMyScore > props.finalOpponentScore ? "ΝΙΚΗΣΑΤΕ!" : props.finalMyScore < props.finalOpponentScore ? "ΧΑΣΑΤΕ..." : "ΙΣΟΠΑΛΙΑ."}
      </p>
      <p className="text-center fs-6 text-secondary">
        ΕΙΣΤΕ ΣΤΗΝ ΚΑΤΗΓΟΡΙΑ:
      </p>
      <img src={mun} className="mt-5 trophy-img" />
      <p className="text-center fs-3 mt-3 fst-italic text-warning">
        CAMPEON DEL MUNDO
      </p>
    </div>
  ) : props.finalMyScore > 22 ? (
    <div className={screenClassName}>
      <p
        className={
          "text-center fs-1 mb-4 text-secondary fw-bold text-" + (props.finalMyScore > props.finalOpponentScore
            ? "success" : props.finalMyScore < props.finalOpponentScore ? "danger" : "warning")
        }
      >
        {props.finalMyScore > props.finalOpponentScore ? "ΝΙΚΗΣΑΤΕ!" : props.finalMyScore < props.finalOpponentScore ? "ΧΑΣΑΤΕ..." : "ΙΣΟΠΑΛΙΑ."}
      </p>
      <p className="text-center fs-6 text-secondary">
        ΕΙΣΤΕ ΣΤΗΝ ΚΑΤΗΓΟΡΙΑ:
      </p>
      <img src={chl} className="mt-5 trophy-img" />
      <p className="text-center fs-3 mt-3 fst-italic text-primary">
        ΤΑ ΜΕΓΑΛΑ ΑΥΤΙΑ
      </p>
    </div>
  ) : props.finalMyScore > 11 ? (
    <div className={screenClassName}>
      <p
        className={
          "text-center fs-1 mb-4 text-secondary fw-bold text-" + (props.finalMyScore > props.finalOpponentScore
            ? "success" : props.finalMyScore < props.finalOpponentScore ? "danger" : "warning")
        }
      >
        {props.finalMyScore > props.finalOpponentScore ? "ΝΙΚΗΣΑΤΕ!" : props.finalMyScore < props.finalOpponentScore ? "ΧΑΣΑΤΕ..." : "ΙΣΟΠΑΛΙΑ."}
      </p>
      <p className="text-center fs-6 text-secondary">
        ΕΙΣΤΕ ΣΤΗΝ ΚΑΤΗΓΟΡΙΑ:
      </p>
      <img src={eul} className="mt-5 trophy-img" />
      <p className="text-center fs-3 mt-3 fst-italic text-danger">
        ΟΥΝΑΪ ΕΜΕΡΙ
      </p>
    </div>
  ) : props.finalMyScore > 5 ? (
    <div className={screenClassName}>
      <p
        className={
          "text-center fs-1 mb-4 text-secondary fw-bold text-" + (props.finalMyScore > props.finalOpponentScore
            ? "success" : props.finalMyScore < props.finalOpponentScore ? "danger" : "warning")
        }
      >
        {props.finalMyScore > props.finalOpponentScore ? "ΝΙΚΗΣΑΤΕ!" : props.finalMyScore < props.finalOpponentScore ? "ΧΑΣΑΤΕ..." : "ΙΣΟΠΑΛΙΑ."}
      </p>
      <p className="text-center fs-6 text-secondary">
        ΕΙΣΤΕ ΣΤΗΝ ΚΑΤΗΓΟΡΙΑ:
      </p>
      <img src={col} className="mt-5 trophy-img" />
      <p className="text-center fs-3 mt-3 fst-italic text-success">
        ΚΑΙΝΟΥΡΓΙΟΣ ΠΑΙΧΤΗΣ
      </p>
    </div>
  ) : (
    <div className={screenClassName}>
      <p
        className={
          "text-center fs-1 mb-4 text-secondary fw-bold text-" + (props.finalMyScore > props.finalOpponentScore
            ? "success" : props.finalMyScore < props.finalOpponentScore ? "danger" : "warning")
        }
      >
        {props.finalMyScore > props.finalOpponentScore ? "ΝΙΚΗΣΑΤΕ!" : props.finalMyScore < props.finalOpponentScore ? "ΧΑΣΑΤΕ..." : "ΙΣΟΠΑΛΙΑ."}
      </p>
      <p className="text-center fs-6 text-secondary">
        ΕΙΣΤΕ ΣΤΗΝ ΚΑΤΗΓΟΡΙΑ:
      </p>
      <img src={retire} className="mt-5 trophy-img" />
      <p className="text-center fs-3 mt-3 fst-italic text-dark">
        ΕΚΤΟΣ ΑΠΟΣΤΟΛΗΣ
      </p>
    </div>
  );
}
