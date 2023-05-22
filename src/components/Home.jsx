import React, { useState } from "react";

import { socket } from "../socket";

import MenuGroup from "./menuGroup/MenuGroup";
import QuestionGroup from "./questionGroup/QuestionGroup";

export default function Home(props) {
  const [currentQuestion, setCurrentQuestion] = useState({});

  socket.on("setQuestion", (currentQuestion) => {
    setCurrentQuestion(currentQuestion);
    props.setEnterQuestion(true);
  });

  socket.on("nextRound", () => {
    props.setEnterQuestion(false);
  });

  return !props.enterQuestion ? (
    <MenuGroup
      playerTurn={props.playerTurn}
      playedQuestions={props.playedQuestions}
      enterQuestion={props.enterQuestion}
    />
  ) : (
    <QuestionGroup
      playerTurn={props.playerTurn}
      currentQuestion={currentQuestion}
      setEnterQuestion={props.setEnterQuestion}
      setPlayedQuestions={props.setPlayedQuestions}
    />
  );
}
