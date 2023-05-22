import { io } from 'socket.io-client';

const URL = process.env.URL;

export const socket = io(URL, {
    autoConnect: false
});