import { Elysia } from "elysia";
import contacts_rout from "./routes/v1/contects";
import { apollo, gql } from "@elysiajs/apollo";
import { betterAuthView } from "./routes/v1/auth/auth";
const app = new Elysia();

app.use(
  apollo({
    typeDefs: gql`
      type user {
        id: Int!
        name: String!
        user_name: String!
        email: String!
        avatar: String 
      }
      type contects {
        id: Int!
        userId: Int!
        contactId: Int!
        contectName: String!
      }  
       type room{
        id: Int!
        room_name: String!
        userId: Int!
        createdAt: String!
        updatedAt: String!
        discription: String
        users: [user]
       }
       type message {
        id: Int!
        roomId: Int!
        userId: Int!
        message: String!
        createdAt: String!
        updatedAt: String!
      }
        type Query {
          
        }
    `,
    resolvers: {
      Query: {
        getuser: async (ctx) => {
           
        },
        getContacts: async (userId: number) => {},
      },
    },
  }),
);

app.use(contacts_rout);
app.all("/api/auth/*", betterAuthView);
app.listen(process.env.PORT as string, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
});
