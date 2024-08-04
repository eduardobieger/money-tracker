import { FastifyInstance } from "fastify";

const WalletsRepository = {
  async getWallets(fastify: FastifyInstance) {
    try {
      const { rows } = await fastify.pg.query(
        `
        SELECT * FROM wallets;
        `
      );

      return rows;
    } catch (err) {
      fastify.log.error(err);
      throw new Error();
    }
  },

  async createWallet(fastify: FastifyInstance, name: string) {
    try {
      const { rows } = await fastify.pg.query(
        `
        INSERT INTO wallets (wallet_name)
        VALUES ($1)
        RETURNING id;
        `,
        [name],
      );

      return rows;
    } catch (err) {
      fastify.log.error(err);
      throw new Error();
    }
  },
};

export default WalletsRepository;
