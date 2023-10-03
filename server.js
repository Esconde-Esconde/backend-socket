const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});

app.get("/", (req,res)=>{
    res.sendStatus(200)
})

io.on("connection", (socket)=>{
    socket.on("bunda", (msg)=>{
        console.log(msg)
    })
})

app.listen(3000, ()=>{
    console.log("server listening on port "+3000)
})