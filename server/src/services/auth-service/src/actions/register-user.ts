import * as grpc from "@grpc/grpc-js";
import { user } from "@/types/auth";

export async function RegisterUser(
  call: grpc.ServerUnaryCall<
    user.auth.RegisterUserRequest,
    user.auth.RegisterUserResponse
  >,
  callback: grpc.sendUnaryData<user.auth.RegisterUserResponse>
): Promise<void> {
  try {
    const { user } = call.request;

    console.log(user);

    return callback(null, {
      message: "Data retrieved successfully",
      success: true,
      verificationCode: "201982",
      toJSON() {
        return {
          message: this.message,
          success: this.success,
          verificationCode: this.verificationCode,
        };
      },
    });
  } catch (error) {
    console.log(error);
    return;
  }
}
