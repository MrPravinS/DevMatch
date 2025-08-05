const socket = require("socket.io");

const initSocketIo = (server) => {
  const io = socket(server, {
    cors: {
      origin: "http://localhost:5173",
    },
  });
  io.on("connection", {server})
  
};

export default initSocketIo;
