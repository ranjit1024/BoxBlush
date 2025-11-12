"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const websocketServer = require("websocket").server;
const crypto_1 = __importDefault(require("crypto"));
const httpSever = http_1.default.createServer();
// hamsh map
const clients = {};
const games = {};
httpSever.listen(8080, () => {
    console.log('Web server Listgin on port number 8080');
});
const wssServer = new websocketServer({
    "httpServer": httpSever
});
wssServer.on("request", (request) => {
    const clientId = crypto_1.default.randomUUID();
    const connection = request.accept(null, request.origin);
    connection.on("open", () => console.log("opened!..."));
    connection.on("message", (message) => {
        const payloadData = JSON.parse(message.utf8Data);
        if (payloadData.method === "create") {
            const cliendId = payloadData.clientId;
            const gameId = crypto_1.default.randomUUID();
            console.log(gameId);
            const payLoad = {
                "method": "create",
                "game": games[gameId] = {
                    "id": gameId,
                    "cells": 20
                }
            };
            connection[cliendId].send(JSON.stringify(payLoad));
        }
    });
    connection.on("close", () => console.log("close!..."));
    clients[clientId] = {
        "connection": connection
    };
    console.log(Object.keys(clients).length);
    const payLoad = {
        "method": "connect",
        "clientId": clientId
    };
    connection.send(JSON.stringify(payLoad));
});
