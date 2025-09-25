import * as grpc from "@grpc/grpc-js";
import * as protoloader from "@grpc/proto-loader";
import path from "path";
import {
  AUTH_HOST_URL,
  AUTH_PROTO_PATH,
  PROTO_LOADER_OPTIONS,
} from "src/shared/config/protoconfig";
import { RegisterUser } from "./actions/register-user";
import { VerifyUser } from "./actions/verify-user";
import { LoginUser } from "./actions/login-user";

const authProtoPath = path.resolve(AUTH_PROTO_PATH);

console.log(authProtoPath);
const packageDefinations: protoloader.PackageDefinition = protoloader.loadSync(
  authProtoPath,
  PROTO_LOADER_OPTIONS
);

const authProto = grpc.loadPackageDefinition(packageDefinations);

//@ts-ignore
const UserAuthService: grpc.ServiceDefinition = authProto.user.auth.UserAuthService.service;

console.log(authProto);

const authServer: grpc.Server = new grpc.Server();

authServer.addService(UserAuthService, {
  RegisterUser,
  VerifyUser,
  LoginUser,
});

export const startAuthServer = () => {
  authServer.bindAsync(
    AUTH_HOST_URL,
    grpc.ServerCredentials.createInsecure(),
    (error, port) => {
      if (error) {
        return console.log(`Failed to create grpc server =>  `, error.message);
      } else {
        console.log(`Author Server Listening at port ${port}`);
      }
    }
  );
};
