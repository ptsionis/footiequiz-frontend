import React, { createContext, useState } from "react";

import { socket } from "./socket";

import WelcomeScreen from "./components/screens/WelcomeScreen";
import RoomsScreen from "./components/screens/RoomsScreen";
import NewRoomScreen from "./components/screens/NewRoomScreen";
import JoinRoomScreen from "./components/screens/JoinRoomScreen";
import GameScreen from "./components/screens/GameScreen";
import DisconnectedScreen from "./components/screens/DisconnectedScreen";
import TrophyScreen from "./components/screens/TrophyScreen";

export const RoomIdContext = createContext();
export const Screen = {
  welcome: 0,
  rooms: 1,
  newRoom: 2,
  joinRoom: 3,
  play: 4,
  disconnected: 5,
  end: 6,
};

export default function App() {
  const [roomId, setRoomId] = useState("");
  const [playerTurn, setPlayerTurn] = useState("");
  const [currentScreen, setCurrentScreen] = useState(Screen.welcome);
  const [enterQuestion, setEnterQuestion] = useState(false);
  const [playedQuestions, setPlayedQuestions] = useState([]);
  const [finalMyScore, setFinalMyScore] = useState(0);
  const [finalOpponentScore, setFinalOpponentScore] = useState(0);

  socket.on("setPlayerTurn", (playerTurn) => {
    setPlayerTurn(playerTurn);
  });

  socket.on("endGame", (scores) => {
    let myScore = scores[0].player == socket.id ? scores[0].score : scores[1].score;
    setFinalMyScore(myScore);
    let opponentScore = scores[0].player != socket.id ? scores[0].score : scores[1].score;
    setFinalOpponentScore(opponentScore);
    setCurrentScreen(Screen.end);
  });

  socket.on("playerLeft", () => {
    setCurrentScreen(Screen.disconnected);
  });

  return currentScreen == Screen.welcome ? (
    <WelcomeScreen setCurrentScreen={setCurrentScreen} />
  ) : currentScreen == Screen.rooms ? (
    <RoomsScreen setCurrentScreen={setCurrentScreen} />
  ) : currentScreen == Screen.newRoom ? (
    <NewRoomScreen
      roomId={roomId}
      setRoomId={setRoomId}
      setCurrentScreen={setCurrentScreen}
      setPlayerTurn={setPlayerTurn}
    />
  ) : currentScreen == Screen.joinRoom ? (
    <JoinRoomScreen
      setRoomId={setRoomId}
      setCurrentScreen={setCurrentScreen}
      setPlayerTurn={setPlayerTurn}
    />
  ) : currentScreen == Screen.play ? (
    <RoomIdContext.Provider value={roomId}>
      <GameScreen
        playerTurn={playerTurn}
        enterQuestion={enterQuestion}
        setEnterQuestion={setEnterQuestion}
        playedQuestions={playedQuestions}
        setPlayedQuestions={setPlayedQuestions}
      />
    </RoomIdContext.Provider>
  ) : currentScreen == Screen.end ? (
    <TrophyScreen finalMyScore={finalMyScore} finalOpponentScore={finalOpponentScore} />
  ) : (
    <RoomIdContext.Provider value={roomId}>
      <DisconnectedScreen />
    </RoomIdContext.Provider>
  );
}
