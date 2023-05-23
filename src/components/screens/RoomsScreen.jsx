import React, { useState } from "react";

import { screenClassName } from "../../screenClassName";
import NewRoomBtn from "../other/NewRoomBtn";
import JoinRoomBtn from "../other/JoinRoomBtn";
import ReCAPTCHA from "react-google-recaptcha";

export default function RoomsScreen(props) {
  const [disableButton, setDisableButton] = useState(true);

  const captchaChecked = () => {
    setDisableButton(false);
  };

  const captchaExpired = () => {
    setDisableButton(true);
  };

  return (
    <div className={screenClassName}>
      <NewRoomBtn
        roomId={props.roomId}
        setRoomId={props.setRoomId}
        setCurrentScreen={props.setCurrentScreen}
        disableButton={disableButton}
      />
      <JoinRoomBtn
        setRoomId={props.setRoomId}
        setCurrentScreen={props.setCurrentScreen}
        disableButton={disableButton}
      />
      <ReCAPTCHA
        className="my-3"
        sitekey={import.meta.env.VITE_CAPTCHA_KEY}
        onChange={() => captchaChecked()}
        onExpired={() => captchaExpired()}
        style={{ backgroundColor: "#84c4cc" }}
      />
    </div>
  );
}
