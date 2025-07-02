import { Elysia, status,t } from 'elysia';



const contacts_rout = new Elysia({
    prefix: '/v1/api'});

contacts_rout.get('/contact', () => {

 return status(201,"Created")
});

contacts_rout.post('/contact', (ctx) => {
    const name = ctx.query.name;
    console.log(name);
    return status(200, "OK");
});


export default contacts_rout;