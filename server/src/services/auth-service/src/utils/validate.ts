import { ZodError, ZodSchema } from "zod";

export const validate = (schema: ZodSchema, data: object) => {
  try {
    schema.parse(data);
  } catch (error) {
    if (error instanceof ZodError) {
      throw new Error(`${error.errors[0].message}: ${error.errors[0].path[0]}`);
    } else {
      throw error;
    }
  }
};
