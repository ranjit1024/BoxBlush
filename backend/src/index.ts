import http from "http";
import { WebSocketServer } from "ws";
//
const httpServer = http.createServer();
const wss = new WebSocketServer({
    server:httpServer
})
httpServer.listen(8080, ()=>{
    console.log('isting on pot nmber 8080')
})
