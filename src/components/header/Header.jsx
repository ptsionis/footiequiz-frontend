import React from "react";

import "./Header.css"

import Score from "./Score";
import DoubleBtn from "./DoubleBtn";
import TipBtn from "./TipBtn";
import PlayerTurn from "./PlayerTurn";

export default function Header(props) {
  return (
    <div className="container-fluid d-flex flex-column mb-5 sticky-top header-bg">
      <div className="d-flex justify-content-between mb-3">
        <div className="d-flex flex-column">
          <Score name="ΕΣΕΙΣ" type="my" />
          <div className="d-flex">
            <DoubleBtn
              playerTurn={props.playerTurn}
              enterQuestion={props.enterQuestion}
              type="my"
            />
            <TipBtn
              playerTurn={props.playerTurn}
              enterQuestion={props.enterQuestion}
              type="my"
            />
          </div>
        </div>
        <div className="d-flex flex-column">
          <Score name="ΑΝΤΙΠΑΛΟΣ" type="opponent" />
          <div className="d-flex">
            <DoubleBtn
              playerTurn={props.playerTurn}
              enterQuestion={props.enterQuestion}
              type="opponent"
            />
            <TipBtn
              playerTurn={props.playerTurn}
              enterQuestion={props.enterQuestion}
              type="opponent"
            />
          </div>
        </div>
      </div>
      <div className="container-fluid align-self-center d-flex justify-content-between w-100 mb-3">
        <PlayerTurn
          playerTurn={props.playerTurn}
          playedQuestionsLength={props.playedQuestionsLength}
        />
      </div>
    </div>
  );
}
