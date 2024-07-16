import dotenv from "dotenv";
dotenv.config();
export const databaseHost = process.env.DATABASE_HOST;
export const databaseUser = process.env.DATABASE_USER;
export const databasePassword = process.env.DATABASE_PASSWORD;
export const databaseName = process.env.DATABASE_NAME;
