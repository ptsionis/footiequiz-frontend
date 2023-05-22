import React from "react";

import "./DisconnectedScreen.css";

import { screenClassName } from "../../screenClassName";

export default function DisconnectedScreen() {
  return (
    <div className={screenClassName}>
      <p>Ο ΑΝΤΙΠΑΛΟΣ ΑΠΟΣΥΝΔΕΘΗΚΕ...</p>
    </div>
  );
}
