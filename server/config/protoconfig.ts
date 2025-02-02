import * as protoloader from "@grpc/proto-loader";

export const AUTH_HOST_URL = process.env.AUTH_HOST_URL || "localhost:50051";
export const AUTH_PROTO_PATH = "../../../../proto/auth.proto";
export const PROTO_LOADER_OPTIONS: protoloader.Options = {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
};
