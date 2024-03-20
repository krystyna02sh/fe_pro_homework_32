import fastify from 'fastify';
import fastifyStatic from '@fastify/static';
import path from 'path';
import { fileURLToPath } from 'url'


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const f = fastify();



f.register(fastifyStatic, {
    root: path.join(__dirname, '../client'),

})
const port = process.env.PORT || 5300;
const host = process.env.HOST || 'localhost'
f.listen({ port, host })
    .then(() => {
        console.log("Server is started")
    })
