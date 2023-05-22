import React, { useState, useEffect } from "react";
import { socket } from "../../socket";

import "./PlayerTurn.css";

export default function PlayerTurn(props) {
  const [currentPlayer, setCurrentPlayer] = useState(props.playerTurn);

  useEffect(() => {
    if (props.playedQuestionsLength != 0) {
      setTimeout(() => {
        setCurrentPlayer(props.playerTurn);
      }, 4000);
    } else {
      setCurrentPlayer(props.playerTurn);
    }
  }, [props.playedQuestionsLength]);

  return socket.id == currentPlayer ? (
    <span className="w-100 px-5 py-2 text-light text-center fs-4 rounded your-turn">
      ΠΑΙΖΕΤΕ!
    </span>
  ) : (
    <span className="w-100 px-5 py-2 text-dark text-center fs-4 rounded opponent-turn">
      ΠΕΡΙΜΕΝΕΤΕ!
    </span>
  );
}
