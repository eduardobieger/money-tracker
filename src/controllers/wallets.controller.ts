import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import WalletsService from "../services/wallets.service.js";

const WalletsController = {
  async getWallets(
    fastify: FastifyInstance,
    request: FastifyRequest,
    reply: FastifyReply,
  ) {
    try {
      const wallets = await WalletsService.getWallets(fastify);

      if (wallets.length > 0) {
        return reply.code(200).send(wallets);
      } else {
        return reply.code(204).send({ message: "No Content" });
      }
    } catch (err) {
      return reply.code(500).send({ error: "Internal Server Error" });
    }
  },

  async createWallet(
    fastify: FastifyInstance,
    request: FastifyRequest,
    reply: FastifyReply,
  ) {
    try {
      const { name } = request.query as { name: string };

      const wallet = await WalletsService.createWallet(fastify, name);

      if (wallet.length > 0) {
        return reply.code(201).send({ message: "Wallet created" });
      } else {
        return reply.code(400).send({ message: "Error creating wallet" });
      }
    } catch (err) {
      return reply.code(500).send({ error: "Internal Server Error" });
    }
  },
};

export default WalletsController;
