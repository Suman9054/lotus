import { Elysia, status,t } from 'elysia';
import prisma from "@repo/db/Prisma"


const contacts_rout = new Elysia({
    prefix: '/v1/api'});

contacts_rout.get('/contact',async (ctx) => {
   const id = ctx.query.id;
    console.log(Number(id));
  if (!id) {
    return status(400, "Id is required");
  }
   const user = await prisma.user.findUnique({where: { Id: Number(id) }});
  if (!user) {
    return status(404, "User not found");
  }
   const contects = await prisma.userContacts.findMany({
    where: { UserId: user.Id },
  })
  if (!contects) {
    return status(404, "Contacts not found");
  }

    
   
 return status(200, contects);
});

contacts_rout.post('/contact', (ctx) => {
    const email = ctx.query.email;
   
    
    return status(200, "OK");
});


export default contacts_rout;