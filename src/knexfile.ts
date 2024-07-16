import { Knex } from "knex";
import {
  databaseHost,
  databaseName,
  databasePassword,
  databaseUser,
} from "./config/env.js";

const knexConfig: { [key: string]: Knex.Config } = {
  development: {
    client: "pg",
    connection: {
      host: databaseHost,
      user: databaseUser,
      password: databasePassword,
      database: databaseName,
    },
    migrations: {
      directory: "./migrations",
    },
    seeds: {
      directory: "./seeds",
    },
  },
};

export default knexConfig;
