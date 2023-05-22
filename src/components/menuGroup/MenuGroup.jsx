import React from "react";
import categories from "../../../data/categories.json";
import MenuBtn from "./MenuBtn";

export default function MenuGroup(props) {
  return (
    <div className="container d-flex flex-column justify-content-center align-items-center">
      <div className="row justify-content-center">
        {categories.map((category) => {
          return (
            <React.Fragment key={category.name}>
              <MenuBtn
                key={category.name + "1"}
                questionId={category.name + "1"}
                playerTurn={props.playerTurn}
                playedQuestions={props.playedQuestions}
                category={category.name}
                icon={category.icon}
                color={category.color}
                level={1}
              />
              <MenuBtn
                key={category.name + "2"}
                questionId={category.name + "2"}
                playerTurn={props.playerTurn}
                playedQuestions={props.playedQuestions}
                category={category.name}
                icon={category.icon}
                color={category.color}
                level={2}
              />
              <MenuBtn
                key={category.name + "3"}
                questionId={category.name + "3"}
                playerTurn={props.playerTurn}
                playedQuestions={props.playedQuestions}
                category={category.name}
                icon={category.icon}
                color={category.color}
                level={3}
              />
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}
