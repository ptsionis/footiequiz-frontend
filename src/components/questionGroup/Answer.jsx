import React, { useContext, useEffect, useState } from "react";

import useSound from "use-sound";
import { RoomIdContext } from "../../App";
import { socket } from "../../socket";

import correctSound from "/audio/correct.mp3";
import wrongSound from "/audio/wrong.mp3";

export default function Answer(props) {
  const roomId = useContext(RoomIdContext);
  const [answerClass, setAnswerClass] = useState("");
  const [playCorrectSound] = useSound(correctSound);
  const [playWrongSound] = useSound(wrongSound);

  useEffect(() => {
    setAnswerClass(props.answerClass);
  }, [props.answerClass]);

  socket.on("revealAnswer", ({ playerAns, correctAns, playedQuestions }) => {
    revealAnswer(playerAns, correctAns, playedQuestions);
  });

  const selectAnswer = () => {
    props.selectAnswer(roomId, props.answerId, socket.id);
  };

  const revealAnswer = (playerAns, correctAns, playedQuestions) => {
    if (props.answerId == playerAns) {
      setAnswerClass("btn btn-warning flex-fill m-2 p-3 disabled");
    }
    setTimeout(() => {
      if (props.answerId == correctAns) {
        setAnswerClass("btn btn-success flex-fill m-2 p-3 disabled");
        if (playerAns == props.answerId) {
          playCorrectSound();
        }
      } else {
        setAnswerClass("btn btn-danger flex-fill m-2 p-3 disabled");
        if (playerAns == props.answerId) {
          playWrongSound();
        }
      }
      props.setPlayedQuestions(playedQuestions);
    }, 3000);
  };

  return (
    <button
      type="button"
      className={answerClass}
      onClick={() => selectAnswer()}
    >
      {props.text}
    </button>
  );
}
