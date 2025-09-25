import { user } from "@auth/types/auth";
import { signInSchema, User } from "@auth/types/types";
import { validate } from "@auth/utils/validate";
import { sequelize } from "@db/connection";
import * as grpc from "@grpc/grpc-js";
import { QueryTypes } from "sequelize";
import bcrypt from "bcrypt";

export async function LoginUser(
  call: grpc.ServerUnaryCall<
    user.auth.LoginUserRequest,
    user.auth.LoginUserResponse
  >,
  callback: grpc.sendUnaryData<user.auth.LoginUserResponse>
) {
  try {
    const { email, password } = call.request;

    validate(signInSchema, { email, password });

    const [userData, _]: [User, any] = (await sequelize.query(
      "SELECT * FROM users WHERE email=:email",
      {
        raw: true,
        type: QueryTypes.SELECT,
        replacements: {
          email: email,
        },
      }
    )) as [User, any];

    if (!userData) {
      return callback({
        details: "User with this email does not exists",
        code: grpc.status.NOT_FOUND,
      });
    }

    const checkPassword = await bcrypt.compare(password, userData.password);

    if (!checkPassword) {
      return callback({
        details: "Invalid Credentials",
        code: grpc.status.PERMISSION_DENIED,
      });
    }
    if (!userData.isVerified) {
      return callback({
        details: "Please verify your account before log in",
        code: grpc.status.FAILED_PRECONDITION,
      });
    }

    return callback(null, {
      message: "User Logged In Successfully",
      success: true,
      user: userData,
      toJSON() {
        return {
          message: this.message,
          success: this.success,
          user: this.user,
        };
      },
    });
  } catch (error) {
    console.log(error);
    return callback({
      details: "Failed to login user",
      code: grpc.status.INTERNAL,
    });
  }
}
