"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const webSocketServer = require("websocket").server;
const httpServer = http_1.default.createServer((req, res) => {
    console.log("We have received a request");
    console.log(req);
    console.log(res);
});
let connection = null;
// websocket handshake
const wsServer = new webSocketServer({
    "httpServer": httpServer
});
// handaling ws request
wsServer.on("request", (request) => {
    connection = request.accept(null, request.origin);
    connection.on("open", (e) => console.log("Opened!!!"));
    connection.on("close", (e) => console.log("Closed!!!"));
    connection.on('message', (e) => {
        console.log("Receing message", e);
    });
});
httpServer.listen(8080, () => {
    console.log("My server is listening on port number 8080");
});
