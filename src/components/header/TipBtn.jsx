import React, { useState, useContext, useEffect } from "react";
import { RoomIdContext } from "../../App";
import { socket } from "../../socket";

import useSound from "use-sound";
import tipSound from "/audio/tip.mp3";

import "./HeaderBtn.css";
import icon from "/images/help/tip.png";
import iconActive from "/images/help/tipActive.png";
import iconDisabled from "/images/help/tipDisabled.png";

export default function TipBtn(props) {
  const roomId = useContext(RoomIdContext);
  const [tip, setTip] = useState(0);
  const [playTipSound] = useSound(tipSound);

  useEffect(() => {
    setTip(2);
  }, []);

  useEffect(() => {
    if (props.enterQuestion) {
      if (props.playerTurn == socket.id && props.type == "my") {
        if (tip == 2) {
          setTip(0);
        }
      } else {
        if (tip != -1) {
          setTip(2);
        }
      }
    } else {
      if (tip == 1) {
        setTip(-1);
      } else if (tip == 0) {
        setTip(2);
      }
    }
  }, [props.enterQuestion]);

  const enterTip = () => {
    socket.emit("useTip", { roomId: roomId, playerId: socket.id });
  };

  const showTip = (playerId) => {
    playTipSound();
    if (props.type == "my" && playerId == socket.id) {
      setTip(1);
    } else if (props.type == "opponent" && playerId != socket.id) {
      setTip(1);
    }
  };

  socket.on("responseTip", ({ playerId }) => {
    showTip(playerId);
  });

  // 0 = Never used, can be pressed, -1 = Used, 1 = Pressed for that round, 2 = Never used, cannot be pressed
  return tip == 0 ? (
    <button type="button" className="btn header-btn" onClick={() => enterTip()}>
      <img src={icon} />
    </button>
  ) : tip == -1 ? (
    <button type="button" className="btn disabled header-btn">
      <img src={iconDisabled} />
    </button>
  ) : tip == 1 ? (
    <button type="button" className="btn disabled header-btn">
      <img src={iconActive} />
    </button>
  ) : (
    <button type="button" className="btn disabled header-btn">
      <img src={icon} />
    </button>
  );
}
