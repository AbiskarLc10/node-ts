import { Sequelize } from "sequelize";
import config from "../../config/database.json";
import {
  DatabaseConfig,
  Environment,
} from "../services/auth-service/src/types/types";

const environment: Environment =
  (process.env.NODE_ENV as Environment) || "development";

const configOptions: DatabaseConfig = config[environment] as DatabaseConfig;

export const sequelize = new Sequelize(
  configOptions.database,
  configOptions.username,
  configOptions.password,
  {
    dialect: configOptions.dialect,
    host: configOptions.host,
  }
);
