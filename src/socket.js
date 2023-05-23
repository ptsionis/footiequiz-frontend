import { io } from 'socket.io-client';

export const socket = io("https://quizball-be.onrender.com/", {
    autoConnect: false
});