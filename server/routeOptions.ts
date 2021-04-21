import * as fastify from "fastify";
import { Static, Type } from "@sinclair/typebox";

const pingSchema = Type.Object({
  ping: Type.String(),
});

export type Ping = Static<typeof pingSchema>;

const pongSchema = Type.Object({
  pong: Type.String(),
});

export type Pong = Static<typeof pongSchema>;

export const routeOptions: fastify.RouteShorthandOptions = {
  schema: {
    querystring: pingSchema,
    response: {
      200: pongSchema,
    },
  },
};
