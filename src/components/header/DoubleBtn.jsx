import React, { useState, useContext, useEffect } from "react";
import { RoomIdContext } from "../../App";
import { socket } from "../../socket";

import useSound from "use-sound";

import "./HeaderBtn.css";
import doubleSound from "/audio/double.mp3";

import icon from "/images/help/double.png";
import iconActive from "/images/help/doubleActive.png";
import iconDisabled from "/images/help/doubleDisabled.png";

export default function DoubleBtn(props) {
  const roomId = useContext(RoomIdContext);
  const [double, setDouble] = useState(0);
  const [playDoubleSound] = useSound(doubleSound);

  useEffect(() => {
    if (props.playerTurn == socket.id && props.type == "my") {
      setDouble(0);
    } else {
      setDouble(2);
    }
  }, []);

  useEffect(() => {
    if (!props.enterQuestion) {
      if (props.playerTurn == socket.id && props.type == "my") {
        if (double == 1) {
          setDouble(-1);
        } else if (double == 2) {
          setDouble(0);
        }
      } else {
        if (double == 1) {
          setDouble(-1);
        } else if (double == 0) {
          setDouble(2);
        }
      }
    } else {
      if (double == 0) {
        setDouble(2);
      }
    }
  }, [props.enterQuestion]);

  const enterDouble = () => {
    socket.emit("useDouble", { roomId: roomId, playerId: socket.id });
  };

  const showDoubles = (playerId) => {
    playDoubleSound();
    if (props.type == "my" && playerId == socket.id) {
      setDouble(1);
    } else if (props.type == "opponent" && playerId != socket.id) {
      setDouble(1);
    }
  };

  socket.on("responseDouble", (playerId) => {
    showDoubles(playerId);
  });

  // 0 = Never used-can be pressed, -1 = Used, 1 = Pressed for that round, 2 = Never used, cannot be pressed
  return double == 0 ? (
    <button
      type="button"
      className="btn"
      style={{ border: "none", padding: "0" }}
      onClick={() => enterDouble()}
    >
      <img src={icon} />
    </button>
  ) : double == -1 ? (
    <button type="button" className="btn disabled header-btn">
      <img src={iconDisabled} />
    </button>
  ) : double == 1 ? (
    <button type="button" className="btn disabled header-btn">
      <img src={iconActive} />
    </button>
  ) : (
    <button type="button" className="btn disabled header-btn">
      <img src={icon} />
    </button>
  );
}
