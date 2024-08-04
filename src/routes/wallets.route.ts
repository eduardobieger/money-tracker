import { FastifyInstance } from "fastify";
import WalletsController from "../controllers/wallets.controller.js";

export default async function walletsRoute(fastify: FastifyInstance) {
  fastify.get("/getWallets", async (request, reply) => {
    await WalletsController.getWallets(fastify, request, reply);
  });

  fastify.post("/createWallet", async (request, reply) => {
    await WalletsController.createWallet(fastify, request, reply);
  });
}
