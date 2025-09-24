import http from "http";
import { WebSocketServer } from "ws";
//
const httpServer = http.createServer();
const wss = new WebSocketServer({
    server:httpServer
}); 
wss.on("connection", request=>{
    request.send('Connect')
})
httpServer.listen(8080, ()=>{
    console.log('isting on pot nmber 8080')
})
