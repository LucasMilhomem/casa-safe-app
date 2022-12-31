const HOST = 'ws://192.168.1.32/ws';


export default class WebSocketService {

    static ws = new WebSocket(HOST);

    constructor(){
    }

    initWS(){
        WebSocketService.ws.onopen = () => {
            // connection opened
            console.log("WebSocket connected..")
        };
    
        WebSocketService.ws.onerror = e => {
            // an error occurred
            console.log(e.message);
        };
    
        WebSocketService.ws.onclose = e => {
            // connection closed
            console.log(e);

        };
    }

    onMessage(callback){
        WebSocketService.ws.onmessage = e => {
            // a message was received
            console.log("Message received: " + e.data);
            callback(e.data);
        };
    }
}