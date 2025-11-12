import http from "http";
const websocketServer = require("websocket").server;
import crypto from "crypto";

const httpSever = http.createServer();
// hamsh map
const clients:{[key:string]:any} = {};
const games:Record<string,any> = {}
httpSever.listen(8080, ()=>{
    console.log('Web server Listgin on port number 8080');
});

const wssServer = new websocketServer({
    "httpServer":httpSever
})

wssServer.on("request", (request:any)=>{
    const clientId = crypto.randomUUID();
    const connection = request.accept(null, request.origin);
    connection.on("open", ()=>console.log("opened!..."));
    connection.on("message",(message:any)=>{
        const payloadData: {
            method:string,
            clientId:string
        } = JSON.parse(message.utf8Data);
        if(payloadData.method === "create"){
         const cliendId = payloadData.clientId;
         const gameId = crypto.randomUUID();
        
         const payLoad = {
            "method":"create",
            "game": games[gameId] = {
            "id":gameId,
            "cells":20
         }
         }
         connection[cliendId].send(JSON.stringify(payLoad))
        }

    } );
    connection.on("close", ()=>console.log("close!..."));
    clients[clientId] = {
        "connection":connection
    }
    console.log(Object.keys(clients).length)
    const payLoad = {
        "method":"connect",
        "clientId":clientId   
    }
    connection.send(JSON.stringify(payLoad))
})