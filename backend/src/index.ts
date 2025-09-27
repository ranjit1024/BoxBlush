import http from "http";
import { WebSocketServer, WebSocket } from "ws";
import crypto from "crypto";

//
const httpServer = http.createServer();
// creating hashMap for clients and their webSocket
let clients: Record<string, WebSocket> = {};
let games : Record<string, {id:string,cells:number}> = {}
const wss = new WebSocketServer({
  server: httpServer,
});
wss.on("connection", (request: WebSocket) => {
  const clientId = crypto.randomBytes(16).toString("hex");
  clients[clientId] = request;
  
  console.log(`New client connected: ${clientId}`);
  console.log(`Total clients: ${Object.keys(clients).length}`);
  request.on("message", (message) => {
    const response: {
      method: string;
      cliendId: string;
      clolor: string;
    } = JSON.parse(message.toString());
    
    if(response.method === 'create'){
      const cliendId = clientId;
      const gameId = crypto.randomBytes(16).toString("hex");
      games[gameId] = {
        id:gameId,
        cells:20
      }
      const payload = {
        "method":"create",
        "game":games[gameId],
       
      }
      clients[cliendId].send(JSON.stringify(payload))
     
    }
    if(response.method === 'join'){
      
    }
  });
  request.on("close", (error) => {
    console.log(`Closing connection on ${clientId}`);
    delete clients[clientId];
  });
  request.on("error", () => {
    console.log(`Something Went wrong`);
    delete clients[clientId];
  });
  request.send(
    JSON.stringify({
      method: "connect",
      clientId: clientId,
    })
  );
});
httpServer.listen(8080, () => {
  console.log("Listing on pot nmber 8080");
});
