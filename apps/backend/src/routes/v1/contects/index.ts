import { Elysia, status, t } from "elysia";
import { prisma_client } from "../../../db/db";

const contacts_rout = new Elysia({
  prefix: "/v1/api",
});

contacts_rout.get("/contact", async (ctx) => {
  const id:string|undefined = ctx.query.id;
  console.log(Number(id));
  if (!id) {
    return status(400, "Id is required");
  }
  
  const contects = prisma_client.find_contacts(Number(id));
  if (!contects) {
    return status(404, "Contacts not found");
  }

  return status(200, contects);
});

contacts_rout.post("/contact/creat", (ctx) => {
  const user_name:string|undefined = ctx.query.user_name;
  const userId:string|undefined = ctx.query.userId;
 if (!user_name || !userId) {
    return status(400, "User name and User ID are required");
  }
  prisma_client.create_contact(user_name, Number(userId)).then(()=>{
    return status(201, "Contact created successfully");
  })
  
});

export default contacts_rout;
