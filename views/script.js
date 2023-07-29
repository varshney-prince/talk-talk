// Assuming socket is correctly initialized and imported

var socket = io();

let btn = document.getElementById('btn');
let inputMsg = document.getElementById('exampleFormControlInput1');
let msgList = document.getElementById('msgList');



btn.onclick = function exec() {
    console.log('clicked');
    if (socket.connected) {
        socket.emit('msg_send', {
            msg: inputMsg.value
        });
    } else {
        console.log('Socket is not connected.');
    }
}

socket.on('msg_rcvd', (data) => {
    let limsg = document.createElement('li');
    limsg.innerText = data.msg;
    msgList.appendChild(limsg);
});
