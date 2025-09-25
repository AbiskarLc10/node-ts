import { AUTH_HOST_URL } from "./shared/config/protoconfig";
import dotenv from 'dotenv';
dotenv.config()
import { sequelize } from "./shared/db/connection";
import { startAuthServer } from "@auth/index";

sequelize.authenticate().then(async () => {
  console.log("Connected to database Successfully");
  console.log(AUTH_HOST_URL);
  startAuthServer();
});
