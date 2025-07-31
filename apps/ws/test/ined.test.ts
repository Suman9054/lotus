import { test, expect } from "bun:test";

test("WebSocket connection", async () => {
  const socket = new WebSocket("ws://localhost:4000");
  expect(socket).toBeDefined();

  socket.addEventListener("open", () => {
    console.log("WebSocket connection opened");
  });
});
test("WebSocket message", async () => {
  const socket = new WebSocket("ws://localhost:4000");
  const message: string[] = [];
  await new Promise<void>((resolve, reject) => {
    socket.addEventListener("open", () => {
      console.log("WebSocket connection opened.");
    });

    socket.addEventListener("message", (event) => {
      console.log("Message from server:", event.data);
      try {
        expect(event.data).toBe("Welcome to the WebSocket server!");
        message.push(event.data as string);
        expect(message).toEqual(["Welcome to the WebSocket server!"]);
        resolve(); // Only resolve if expectation passes
      } catch (err) {
        reject(err); // Fail the test if assertion fails
      } finally {
        socket.close();
      }
    });

    socket.addEventListener("error", (err) => {
      reject(new Error("WebSocket error: " + err));
    });

    // Optionally, add a timeout to avoid hanging forever if server doesn't respond
    setTimeout(() => {
      reject(new Error("WebSocket message timeout"));
    }, 2000);
  });
});
