import { AUTH_HOST_URL } from "config/protoconfig";
import * as grpc from "@grpc/grpc-js";
import { sequelize } from "./db/connection";
import { startAuthServer } from "@/index";

sequelize.authenticate().then(async () => {
  console.log("Connected to database Successfully");
  console.log(AUTH_HOST_URL);
  startAuthServer();
});
