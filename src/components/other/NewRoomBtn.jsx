import React from "react";

import "./RoomBtn.css";
import { Screen } from "../../App";

export default function NewRoomBtn(props) {
  const changeScreen = () => {
    props.setCurrentScreen(Screen.newRoom);
  };

  return (
    <button
      type="button"
      className="btn my-3 fs-3 py-2 px-4 text-light fw-bold room-btn"
      onClick={() => changeScreen()}
    >
      ΔΗΜΙΟΥΡΓΙΑ ΔΩΜΑΤΙΟΥ
    </button>
  );
}
