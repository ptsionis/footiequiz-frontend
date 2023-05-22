import { io } from 'socket.io-client';

const URL = "https://quizball-be.onrender.com/";

export const socket = io(URL, {
    autoConnect: false
});