import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";

const app = express();
const server = createServer(app);
const io = new Server(server);
const PORT = 8080;

app.get("/", (req, res) => {
  res.send("<h1>Server Stuff</h1>");
});

io.on("connection", (socket) => {
  console.log("someone joined");
});

server.listen(PORT, () => {
  console.log("listening on " + PORT);
});