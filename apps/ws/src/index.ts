import { Elysia } from "elysia";

const app = new Elysia();

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
