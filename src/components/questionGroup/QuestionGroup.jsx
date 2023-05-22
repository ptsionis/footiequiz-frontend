import React, { useEffect, useState } from "react";

import { socket } from "../../socket";
import Question from "./Question";
import Answer from "./Answer";

export default function QuestionGroup(props) {
  const primaryClass = "btn btn-primary flex-fill m-2 p-3";
  const primaryDisClass = "btn btn-primary flex-fill m-2 p-3 disabled";
  const [answerClass, setAnswerClass] = useState("");

  useEffect(() => {
    if (props.playerTurn == socket.id) {
      setAnswerClass(primaryClass);
    } else {
      setAnswerClass(primaryDisClass);
    }
  }, []);

  const selectAnswer = (roomId, answerId, playerId) => {
    setAnswerClass(primaryDisClass);
    socket.emit("postAnswer", {
      roomId: roomId,
      answerId: answerId,
      playerId: playerId,
    });
  };

  return (
    <div className="px-3 d-flex flex-column justify-content-center align-items-center">
      <Question
        question={props.currentQuestion.question}
        level={props.currentQuestion.level}
        img={props.currentQuestion.imageUrl}
      />
      <div className="row justify-content-center">
        {props.currentQuestion.answers.map((data, index) => {
          return (
            <Answer
              key={index}
              answerId={index}
              text={data}
              answerClass={answerClass}
              playerTurn={props.playerTurn}
              selectAnswer={selectAnswer}
              setPlayedQuestions={props.setPlayedQuestions}
            />
          );
        })}
      </div>
    </div>
  );
}
