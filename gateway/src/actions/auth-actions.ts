import { Request, Response, NextFunction } from "express";
import { ExpressError } from "@/errors/errorTypes";
import { signUpSchema, User } from "@/types/types";
import { validate } from "@/utils/validate";

export async function SignUp(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any>  {
  try {
    const {
      firstName,
      lastName,
      email,
      address,
      password,
      age,
      profileImage,
    }: User = req.body;

    validate(signUpSchema, req.body);

    return res.status(200).json({
      message: "Hello",
    });
  } catch (error) {
    if (error instanceof ExpressError) {
      return next(error);
    } else if (error instanceof Error) {
      console.log(error);
      return res.status(500).json({
        message: error?.message || "Internal server error",
        code: 500,
        success: false,
      });
    }
  }
}
