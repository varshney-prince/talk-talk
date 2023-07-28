const express=require('express');
const http = require('http');
const socketio = require('socket.io');
const path = require('path');


const app = express();
const server=http.createServer(app);
const io=socketio(server);  

io.on('connection',(socket)=>{
    console.log('a user connected',socket.id);
    
    socket.on('msg_send',(data)=>{
        console.log(data);
        io.emit('msg_rcvd',data);
    })
});

app.use(express.static(path.join(__dirname, 'public')));

server.listen(3000,()=>{

    console.log('server listening on port 3000' );

});