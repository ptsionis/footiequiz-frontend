import React from "react";

import { screenClassName } from "../../screenClassName";
import NewRoomBtn from "../other/NewRoomBtn";
import JoinRoomBtn from "../other/JoinRoomBtn";

export default function RoomsScreen(props) {
  return (
    <div className={screenClassName}>
      <NewRoomBtn roomId={props.roomId} setRoomId={props.setRoomId} setCurrentScreen={props.setCurrentScreen} />
      <JoinRoomBtn setRoomId={props.setRoomId} setCurrentScreen={props.setCurrentScreen} />
    </div>
  );
}
