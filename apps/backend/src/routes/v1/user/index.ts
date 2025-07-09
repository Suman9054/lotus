import {Elysia, status} from "elysia";
import { prisma_client } from "../../../db/db";



export const user_rout = new Elysia({
  prefix: "/v1/api",});



user_rout.post("/user/creat", async (ctx) => {
     const user_name: string | undefined = ctx.query.user_name;
     const pasword: string | undefined = ctx.query.password;
     const email: string | undefined = ctx.query.email;
     const name: string | undefined = ctx.query.name;
     const avatar: string | undefined = ctx.query.avatar || "https://example.com/default-avatar.png"; // Default avatar URL  
      if (!user_name || !pasword || !email || !name) {
        return status(400, "User name, password, email, and name are required");
      }
    try {
        await prisma_client.create_user(user_name, pasword, email, name, avatar);
        return status(201, "User created successfully");
      } catch (error) {
        console.error("Error creating user:", error);
        return status(500, "Internal server error");
      }    
})
