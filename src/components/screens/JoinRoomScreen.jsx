import React, { useEffect, useRef, useState } from "react";

import "./JoinRoomScreen.css";
import { screenClassName } from "../../screenClassName";
import { Screen } from "../../App";
import { socket } from "../../socket";

export default function JoinRoomScreen(props) {
  const formRef = useRef(null);
  const [errorOpacity, setErrorOpacity] = useState(0);
  let errorTimer = null;

  useEffect(() => {
    socket.connect();
  }, []);

  socket.on("roomError", () => {
    showRoomError();
  });

  socket.on("startGame", ({ playerTurn }) => {
    props.setRoomId(formRef.current.value);
    props.setPlayerTurn(playerTurn);
    props.setCurrentScreen(Screen.play);
  });

  const enterRoom = () => {
    socket.emit("joinRoom", formRef.current.value);
  };

  const showRoomError = () => {
    setErrorOpacity(1);
    clearTimeout(errorTimer);
    errorTimer = setTimeout(() => {
      setErrorOpacity(0);
    }, 3000);
  };

  return (
    <div className={screenClassName}>
      <div className="d-flex flex-column justify-content-center">
        <span
          className="text-center mb-3 rounded px-4 py-3"
          style={{ backgroundColor: "#e9d49a" }}
        >
          ΕΙΣΑΓΕΤΕ ΤΟΝ 8-ΨΗΦΙΟ ΚΩΔΙΚΟ ΔΩΜΑΤΙΟΥ ΕΝΟΣ ΑΝΤΙΠΑΛΟΥ:
        </span>
        <div className="d-flex justify-content-between align-items-start">
          <form className="form-group me-3" style={{ flex: "1" }}>
            <input
              type="text"
              className="form-control"
              ref={formRef}
              aria-describedby="textRoomId"
              placeholder="Π.Χ. ABCD1234"
            />
          </form>
          <button
            type="button"
            className="btn py-1 px-3 py-2 join-btn"
            onClick={() => enterRoom()}
          >
            ΕΙΣΟΔΟΣ
          </button>
        </div>
        <p
          className="text-center text-danger my-5"
          style={{ opacity: errorOpacity }}
        >
          ΤΟ ΔΩΜΑΤΙΟ ΔΕΝ ΕΙΝΑΙ ΔΙΑΘΕΣΙΜΟ!
        </p>
      </div>
    </div>
  );
}
