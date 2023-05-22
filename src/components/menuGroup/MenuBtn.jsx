import React, { useState, useEffect, useContext } from "react";

import "./MenuBtn.css";
import { socket } from "../../socket";
import { RoomIdContext } from "../../App";

export default function MenuBtn(props) {
  const roomId = useContext(RoomIdContext);
  const [categoryDisplay, setCategoryDisplay] = useState("");
  const [className, setClassName] = useState(
    "position-relative col-sm-6 col-md-3 btn flex-fill mx-5 my-3 p-3 text-light fs-3 fw-bold"
  );

  useEffect(() => {
    if (
      props.playerTurn != socket.id ||
      props.playedQuestions.includes(props.questionId)
    ) {
      setClassName(
        "position-relative col-sm-6 col-md-3 btn btn-secondary flex-fill mx-5 my-3 p-3 text-light fs-3 fw-bold disabled"
      );
    } else {
      setClassName(
        "position-relative col-sm-6 col-md-3 btn flex-fill mx-5 my-3 p-3 text-light fs-3 fw-bold"
      );
    }
  }, [props.playerTurn, props.playedQuestions]);

  useEffect(() => {
    if (props.category == "history") {
      setCategoryDisplay("ΙΣΤΟΡΙΑ");
    } else if (props.category == "geography") {
      setCategoryDisplay("ΓΕΩΓΡΑΦΙΑ");
    } else if (props.category == "logo") {
      setCategoryDisplay("ΛΟΓΟΤΥΠΑ");
    } else if (props.category == "misses") {
      setCategoryDisplay("ΠΟΙΟΣ ΛΕΙΠΕΙ");
    } else if (props.category == "bio") {
      setCategoryDisplay("PLAYER ID");
    } else if (props.category == "hide") {
      setCategoryDisplay("ΚΡΥΦΗ");
    }
  }, []);

  const selectQuestion = () => {
    socket.emit("getQuestion", {
      roomId: roomId,
      category: props.category,
      level: props.level,
    });
  };

  return (
    <button
      type="button"
      className={className}
      onClick={() => selectQuestion()}
      style={{ backgroundColor: props.color }}
    >
      <img
        src={"./../images/categories/" + props.icon}
        className="position-absolute menu-img"
      />
      {categoryDisplay + " x" + props.level}
    </button>
  );
}
