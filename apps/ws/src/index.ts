const server = Bun.serve<{ authToken: string }, {}>({
  port: 4000,
  fetch(req, server) {
    const success = server.upgrade(req);
    if (success) {
      // Bun automatically returns a 101 Switching Protocols

      return undefined;
    }
  },
  websocket: {
    open(ws) {
      console.log("WebSocket opened");
      ws.send("Welcome to the WebSocket server!");
    },
    message(ws, message) {},
  },
});

console.log(`Listening on ${server.hostname}:${server.port}`);
