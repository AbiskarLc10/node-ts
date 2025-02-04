import * as grpc from "@grpc/grpc-js";
import { user } from "@/types/auth";
import { sequelize } from "@db/connection";
import { validate } from "@/utils/validate";
import { signUpSchema, User } from "@/types/types";
import bcrypt from "bcrypt";
import { QueryTypes } from "sequelize";
import { v4 as uuidv4 } from "uuid";
export async function RegisterUser(
  call: grpc.ServerUnaryCall<
    user.auth.RegisterUserRequest,
    user.auth.RegisterUserResponse
  >,
  callback: grpc.sendUnaryData<user.auth.RegisterUserResponse>
): Promise<void> {
  try {
    const { user } = call.request;

    validate(signUpSchema, user as object);

    const testId = uuidv4();
    console.log(testId);
    const [checkUserExists, _]: [User[], any] = (await sequelize.query(
      "SELECT * FROM users WHERE email=:email",
      {
        replacements: {
          email: user?.email,
        },
        raw: true,
        type: QueryTypes.SELECT,
      }
    )) as [User[], any];

    let newUser;
    const hashedPassword = await bcrypt.hash(user?.password as string, 10);
    const verificationCode = Math.floor(
      100000 + Math.random() * 100000
    ).toString();
    const verificationCodeExpiry = new Date(Date.now() + 3600000);
    if (checkUserExists && checkUserExists.length === 1) {
      if (checkUserExists[0].isVerified) {
        return callback({
          details: "User already verified proceed to login",
          code: grpc.status.ALREADY_EXISTS,
        });
      } else {
        newUser = await sequelize.query(
          "UPDATE users SET password= :password,verificationCode=:verificationCode,verificationCodeExpiry=:verificationCodeExpiry WHERE email=:email",
          {
            raw: true,
            replacements: {
              password: hashedPassword,
              verificationCode: verificationCode,
              verificationCodeExpiry: verificationCodeExpiry,
            },
          }
        );
      }
    } else {
      newUser = await sequelize.query(
        "INSERT INTO users (id,firstName,midName,lastName,gender,age,email,password,contact,profileImage,citizenShipFront,citizenShipBack,verificationCode,verificationCodeExpiry,createdAt,updatedAt) VALUES (:id,:firstName,:midName,:lastName,:gender,:age,:email,:password,:contact,:profileImage,:citizenShipFront,:citizenShipBack,:verificationCode,:verificationCodeExpiry,:createdAt,:updatedAt);",
        {
          replacements: {
            ...user,
            id: uuidv4(),
            password: hashedPassword,
            verificationCode: verificationCode,
            verificationCodeExpiry: verificationCodeExpiry,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
        }
      );
    }

    console.log(newUser);

    return callback(null, {
      message: "user registered successfully",
      success: true,
      verificationCode: verificationCode,
      toJSON() {
        return {
          message: this.message,
          success: this.success,
          verificationCode: this.verificationCode,
        };
      },
    });
  } catch (error: any) {
    console.log(error);
    return callback({
      details: error.details,
      message: error.message,
      code: grpc.status.INTERNAL,
    });
  }
}
