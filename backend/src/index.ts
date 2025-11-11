import http from "http";
const websocketServer = require("websocket").server;
import crypto from "crypto";

const httpSever = http.createServer();
// hamsh map
const clients:{[key:string]:any} = {};
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

        console.log(console.log(message.utf8Data))
    } );
    connection.on("close", ()=>console.log("close!..."));
    clients[clientId] = {
        "connection":connection
    }
    const payLoad = {
        "method":"connect",
        "clinetId":clientId   
    }
    connection.send(JSON.stringify(payLoad))
})