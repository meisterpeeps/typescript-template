import fastify from 'fastify'
import fastifyBlipp from 'fastify-blipp'
import fastifyStatic from 'fastify-static'
import { join } from 'path'
import {routeOptions, Ping, Pong } from './routeOptions'

const server = fastify()
    .register(fastifyBlipp)
    .register(fastifyStatic, {
        wildcard: true,
        root: join(__dirname, "../../client/dist/"),
      })

//__dirname, "../../client/dist/html", "index.html"
server.get("/", (_, reply) => {
    reply.sendFile("html/index.html")
})

server.get<{Querystring: Ping}>("/ping", routeOptions, async (req, reply) => {
    const ping = req.query.ping;
    const pong = ping;
    setTimeout(() => {
        reply.send({ pong } as Pong);
    }, 2000)
});


const startServer = async () => {
    try{
        await server.listen(3000)
        console.log("Server listening");
        server.blipp()
    } catch (err) {
        console.log(err);
    }    
}
startServer()