import {Elysia, status} from "elysia";
import { prisma_client } from "../../../db/db";



const user_rout = new Elysia({
  prefix: "/v1/api",});



user_rout.get("/user", async (ctx) => {
  const id: string | undefined = ctx.query.id;
  if (!id) {
    return status(400, "Id is required");
  } 
     try{
     const user = await prisma_client.fiend_user(Number(id));
     return status(200, user);
     }catch(e:any){
         
         return status(500, `Error: ${e.message}`);
     }

})