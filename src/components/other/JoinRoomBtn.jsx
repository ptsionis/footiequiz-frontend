import React from "react";

import { Screen } from "../../App";

export default function JoinRoomBtn(props) {
  const changeScreen = () => {
    props.setCurrentScreen(Screen.joinRoom);
  };

  return (
    <button
      type="button"
      className="btn btn-primary my-3 fs-3 py-2 px-4 text-light fw-bold"
      onClick={() => changeScreen()}
      disabled={props.disableButton}
    >
      ΕΙΣΟΔΟΣ ΣΕ ΔΩΜΑΤΙΟ
    </button>
  );
}
