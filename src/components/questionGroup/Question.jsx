import React, { useState } from "react";

import { socket } from "../../socket";

import "./Question.css";

export default function Question(props) {
  const [tip, setTip] = useState("");
  const [showTip, setShowTip] = useState(false);

  socket.on("responseTip", ({ tip }) => {
    setTip(tip);
    setShowTip(true);
  });

  return showTip ? (
    <div className="d-flex flex-column align-items-center fs-5 my-4">
      <div className="position-relative">
        <p className="text-center mb-2 rounded px-4 py-3 question">
          {props.question}
        </p>
        <p className="text-light px-2 py-1 rounded-circle position-absolute level">
          X{props.level}
        </p>
      </div>
      <img
        src={props.img}
        className="mt-3"
        style={{ width: "auto", height: props.img ? "100%" : "0px" }}
      />
      <p className="text-center text-danger fs-6 fw-bold mt-3">{tip}</p>
    </div>
  ) : (
    <div className="d-flex flex-column align-items-center fs-5 my-4">
      <div className="position-relative">
        <p className="text-center mb-2 rounded px-4 py-3 question">
          {props.question}
        </p>
        <p className="text-light px-2 py-1 rounded-circle position-absolute level">
          X{props.level}
        </p>
      </div>
      <img
        src={props.img}
        className="mt-3"
        style={{ width: "auto", height: props.img ? "100%" : "0px" }}
      />
    </div>
  );
}
