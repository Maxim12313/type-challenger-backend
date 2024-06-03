import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";

import runExpress from "./expressFunc.js";
import runSocket from "./socketFunc.js";

const app = express();
const server = createServer(app);
const io = new Server(server);
const PORT = 8080;

runExpress(app);
runSocket(io);


server.listen(PORT, () => {
  console.log("listening on " + PORT);
});