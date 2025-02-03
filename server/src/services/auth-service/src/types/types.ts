import { GrpcObject } from "@grpc/grpc-js";
import { Dialect } from "sequelize/types";
import { z } from "zod";

export type User = {
  firstName: string;
  midName: string;
  lastName: string;
  age: number;
  gender: "male" | "female" | "others";
  email: string;
  password: string;
  address: string;
  profileImage?: string;
  citizenShipFront: string;
  citizenShipBack: string;
};

export const signUpSchema = z.object({
  firstName: z.string().min(3, {
    message: "firstName must be at least 3 characters",
  }),
  midName: z.string().optional(),
  lastName: z.string().min(3, {
    message: "Last name must be at least 3 characters",
  }),
  age: z
    .number()
    .int("Age must be an integer")
    .min(16, "Age must be at least 16")
    .max(99, "Age cannot exceed 99"),
  gender: z.enum(["male", "female", "others"], {
    message: "Select you gender",
  }),
  email: z
    .string()
    .regex(new RegExp("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$"), {
      message: "Not a valid email address",
    }),
  password: z
    .string()
    .regex(new RegExp("^(?=.*[A-Z])(?=.*[a-z])(?=.*\\d)(?=.*[\\W_]).{6,}$"), {
      message:
        "Password must have an uppercase letter,a digit and an special character",
    }),
  contact: z.string().regex(new RegExp("(?=98|97|96[d]).{10}"), {
    message: "Not a valid number",
  }),
  profileImage: z.string({ message: "Please select profile Image" }).optional(),
  citizenShipFront: z.string({ message: "Please upload citizenship front" }),
  citizenShipBack: z.string({ message: "Please upload citizenship back" }),
});

export const signInSchema = z.object({
  email: z
    .string()
    .regex(new RegExp("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$"), {
      message: "Not a valid email address",
    }),
  password: z.string(),
});

export type Environment = "development" | "test" | "production";

export type DatabaseConfig = {
  username: string;
  password: string;
  database: string;
  host: string;
  dialect: Dialect;
};

