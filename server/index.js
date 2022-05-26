const websocket = require('ws');
var port = 11121;
const wss = new websocket.Server({"port": port});
wss.on("connection", ws => {
    console.log("Client connected!");
    ws.on("message", data => {
        console.log(`Message received: ${data}`);
    });
    ws.on("close", () => {
        console.log("Client disconnected!");
    });
    ws.onerror = () => {
        console.log("Some error occurred");
    };
});
console.log(`WebSocket server is listening on port ${port}`);