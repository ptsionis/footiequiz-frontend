import React, { useEffect, useState } from "react";

import "./NewRoomScreen.css";
import { screenClassName } from "../../screenClassName";
import { Screen } from "../../App";
import { socket } from "../../socket";

import copyClipboard from "/images/copyClipboard.png";

export default function NewRoomScreen(props) {
  const [copiedOpacity, setCopiedOpacity] = useState(0);
  let copiedTimer = null;

  useEffect(() => {
    socket.connect();
  }, []);

  socket.on("connect", () => {
    socket.emit("createRoom");
  });

  socket.on("roomCreated", (roomId) => {
    props.setRoomId(roomId);
  });

  socket.on("startGame", ({ playerTurn }) => {
    props.setPlayerTurn(playerTurn);
    props.setCurrentScreen(Screen.play);
  });

  const copyRoomId = () => {
    navigator.clipboard.writeText(props.roomId);
    setCopiedOpacity(1);
    clearTimeout(copiedTimer);
    copiedTimer = setTimeout(() => {
      setCopiedOpacity(0);
    }, 3000);
  };

  return (
    <div className={screenClassName}>
      <div className="d-flex flex-column justify-content-center">
        <p className="text-center mb-3 rounded px-4 py-3 header-title">
          Ο ΚΩΔΙΚΟΣ ΤΟΥ ΔΩΜΑΤΙΟΥ ΕΙΝΑΙ:
        </p>
        <div className="d-flex justify-content-between align-items-start">
          <span className="text-center me-2 mb-3 rounded px-4 py-2 room-id">
            {props.roomId}
          </span>
          <button
            type="button"
            className="btn btn-primary py-1 px-3 py-2"
            onClick={() => copyRoomId()}
          >
            <img src={copyClipboard} style={{ width: "15px" }} />
          </button>
        </div>
        <span className="text-center text-light bg-danger my-3 p-2 rounded">
          ΠΕΡΙΜΕΝΕΤΕ ΜΕΧΡΙ ΝΑ ΕΜΦΑΝΙΣΤΕΙ Ο ΚΩΔΙΚΟΣ ΚΑΙ ΕΠΕΙΤΑ ΑΝΤΙΓΡΑΨΤΕ ΤΟΝ! (ΠΕΡΙΕΧΕΙ ΜΟΝΟ ΠΕΖΑ ΓΡΑΜΜΑΤΑ)
        </span>
      </div>
      <div className="d-flex flex-column justify-content-center align-items-center mt-5">
        <p>ΑΝΑΜΟΝΗ ΓΙΑ ΑΝΤΙΠΑΛΟ...</p>
        <p
          className="text-center text-light bg-success mt-3 p-2 rounded"
          style={{ opacity: copiedOpacity }}
        >
          Ο ΚΩΔΙΚΟΣ ΑΝΤΙΓΡΑΦΗΚΕ!
        </p>
      </div>
    </div>
  );
}
