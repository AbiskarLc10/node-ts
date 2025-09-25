import { Sequelize } from "sequelize";
import config from "@config/database_config";
import {
  DatabaseConfig,
  Environment,
} from "../types/app";

const environment: Environment =
  (process.env.NODE_ENV as Environment) || "development";

const configOptions: DatabaseConfig = config[environment] as DatabaseConfig;
console.log(configOptions)
export const sequelize = new Sequelize(
  configOptions.database,
  configOptions.username,
  configOptions.password,
  {
    dialect: configOptions.dialect,
    host: configOptions.host,
  }
);
