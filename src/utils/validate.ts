import { signInSchema, signUpSchema } from "@/types/types";
import { ZodError, ZodSchema } from "zod";

export const validate = (schema: ZodSchema, data: object) => {
  try {
    schema.parse(data);
  } catch (error) {
    console.log(error);
    if (error instanceof ZodError) {
      throw {
        message: error.errors[0].message,
      };
    }else{
        throw error;
    }
  }
};

validate(signUpSchema, { email: "abiskar@gmail.com", password: "Wootanuy" });
