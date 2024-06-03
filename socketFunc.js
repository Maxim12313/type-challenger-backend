export default function runSocket(io) {
  io.on("connection", (socket) => {
    console.log("someone joined");
  });
}