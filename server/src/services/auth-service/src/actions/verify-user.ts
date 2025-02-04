import * as grpc from "@grpc/grpc-js";
import { user } from "@/types/auth";
import { sequelize } from "@db/connection";
import { QueryTypes } from "sequelize";
import { User } from "@/types/types";

export async function VerifyUser(
  call: grpc.ServerUnaryCall<
    user.auth.VerifyUserRequest,
    user.auth.VerifyUserResponse
  >,
  callback: grpc.sendUnaryData<user.auth.VerifyUserResponse>
): Promise<void> {
  try {
    const { verificationCode } = call.request;

    const email = call.metadata.get("userData")[0];

    if (!email || !verificationCode) {
      return callback({
        details: "Insufficient data provided to verify user",
        code: grpc.status.INVALID_ARGUMENT,
      });
    }

    const [userToBeVerified, _]: [User, any] = (await sequelize.query(
      "SELECT * FROM users WHERE email=:email",
      {
        raw: true,
        type: QueryTypes.SELECT,
        replacements: {
          email: email,
        },
      }
    )) as [User, any];

    if (!userToBeVerified) {
      return callback({
        details: "User does not exists.Please Sign Up",
        code: grpc.status.NOT_FOUND,
      });
    }
    if (userToBeVerified.isVerified) {
      return callback({
        details: "User already verified. Please Login",
        code: grpc.status.ALREADY_EXISTS,
      });
    } else {
      if (userToBeVerified.verificationCodeExpiry < new Date()) {
        return callback({
          details: "Verification code expired",
          code: grpc.status.DEADLINE_EXCEEDED,
        });
      }

      if (userToBeVerified.verificationCode === verificationCode) {
        await sequelize.query("UPDATE users SET isVerified=:isVerified", {
          raw: true,
          replacements: {
            isVerified: true,
          },
        });
      } else {
        return callback({
          details: "Invalied verification code",
          code: grpc.status.PERMISSION_DENIED,
        });
      }
    }

    return callback(null, {
      message: "User verified successfully",
      isVerified: true,
      success: "true",
      toJSON() {
        return {
          message: this.message,
          isVerified: this.isVerified,
          success: this.success,
        };
      },
    });
  } catch (error) {
    console.log(error);
    return callback({
      details: "Failed to verify user code",
      code: grpc.status.INTERNAL,
    });
  }
}
