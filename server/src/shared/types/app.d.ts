import { Dialect } from "sequelize";

export type Environment = "development" | "test" | "production";

export type DatabaseConfig = {
  username: string;
  password: string;
  database: string;
  host: string;
  dialect: Dialect;
};
