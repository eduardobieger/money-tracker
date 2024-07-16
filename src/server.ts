import Fastify from "fastify";
import knex from "knex";
import knexConfig from "./knexfile.js";

const fastify = Fastify({
  logger: {
    transport: {
      target: "pino-pretty",
    },
  },
});

const db = knex(knexConfig.development);

fastify.decorate("knex", db);

fastify.listen({ port: 3200, host: "0.0.0.0" }, function (err) {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
});
