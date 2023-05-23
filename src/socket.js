import { io } from 'socket.io-client';

export const socket = io(import.meta.URL, {
    autoConnect: false
});