import { Elysia } from 'elysia';
import contacts_rout from './routes/v1/contects';



const app = new Elysia();


app.get('/', 'Hello Elysia')
app.use(contacts_rout);




app.listen(5000,()=>{
  console.log('Server is running on http://localhost:5000');
})