import { Elysia } from "elysia";
import contacts_rout from "./routes/v1/contects";
import { apollo, gql } from '@elysiajs/apollo'
import { user_rout } from "./routes/v1/user";

const app = new Elysia();


app
  .use(apollo({
    typeDefs: gql`
      type 
    `,
    resolvers: {
      Query: {
        
      }
    }
  }))
  
app.use(contacts_rout);
app.use(user_rout);
app.listen(process.env.PORT || 3001, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
});
