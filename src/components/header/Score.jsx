import React, { useState } from "react";

import { socket } from "../../socket";

export default function Score(props) {
  const [score, setScore] = useState(0);

  const updateScore = (scores) => {
    setTimeout(() => {
      if (scores[0].player == socket.id) {
        if (props.type == "my") {
          setScore(scores[0].score);
        } else {
          setScore(scores[1].score);
        }
      } else {
        if (props.type == "my") {
          setScore(scores[1].score);
        } else {
          setScore(scores[0].score);
        }
      }
    }, 3000);
  };

  socket.on("revealAnswer", ({ scores }) => {
    updateScore(scores);
  });

  return (
    <span className="my-2 text-light text-center fs-6">
      {`${props.name}: ${score}`}
    </span>
  );
}
