import { FastifyInstance } from "fastify";
import WalletsRepository from "../repositories/wallets.repository.js";

const WalletsService = {
  async getWallets(fastify: FastifyInstance) {
    return await WalletsRepository.getWallets(fastify);
  },

  async createWallet(fastify: FastifyInstance, name: string) {
    return await WalletsRepository.createWallet(fastify, name);
  },
};

export default WalletsService;
