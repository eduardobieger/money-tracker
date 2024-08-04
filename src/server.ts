import Fastify from "fastify";
import fastifyPostgres from "@fastify/postgres";
import fastifyCors from "@fastify/cors";
import {
  databaseHost,
  databasePort,
  databaseName,
  databaseUser,
  databasePassword,
} from "./config/env.js";
import walletsRoute from "./routes/wallets.route.js";
import stocksRoute from "./routes/stocks.route.js";

const fastify = Fastify({
  logger: {
    transport: {
      target: "pino-pretty",
    },
  },
});

fastify.register(fastifyPostgres, {
  connectionString: `postgres://${databaseUser}:${databasePassword}@${databaseHost}:${databasePort}/${databaseName}`,
});

fastify.register(fastifyCors, {
  origin: true,
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type"],
});

fastify.register(
  async function (apiRoutes) {
    apiRoutes.register(walletsRoute, { prefix: "/wallets" });
    apiRoutes.register(stocksRoute, { prefix: "/stocks" });
  },
  { prefix: "/api" },
);

fastify.listen({ port: 3200, host: "0.0.0.0" }, function (err) {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
});
