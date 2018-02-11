var socket = io();
socket.on("connect",function(){
  console.log("Connected to server");
  socket.emit("createMessage",{
    from:"Rahish",
    text:"Hey How are"

  })

});
socket.on("disconnect",function(){
  console.log("Disconnect from server");
});
//this event is emit from server
socket.on("newMessage",function(message){
  console.log("New Message",message);
})
