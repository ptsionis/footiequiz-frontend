import React from "react";

import { screenClassName } from "../../screenClassName";
import Header from "../header/Header";
import Home from "../Home";

export default function GameScreen(props) {
  return (
    <div className={screenClassName}>
      <Header
        playerTurn={props.playerTurn}
        enterQuestion={props.enterQuestion}
        playedQuestionsLength={props.playedQuestions.length}
      />
      <Home
        playerTurn={props.playerTurn}
        enterQuestion={props.enterQuestion}
        setEnterQuestion={props.setEnterQuestion}
        playedQuestions={props.playedQuestions}
        setPlayedQuestions={props.setPlayedQuestions}
      />
    </div>
  );
}
