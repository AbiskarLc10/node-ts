import { NextFunction, Request, Response } from "express";
import { ExpressError } from "./errorTypes";
import { grpcErrorCodeMap } from "./grpcCodes";

export async function errorMiddleware(
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) {

  if (err instanceof ExpressError) {
    if (err.code <= 16) {
      return res.status(grpcErrorCodeMap[err.code as number].httpStatus).json({
        message: err.message || grpcErrorCodeMap[err.code].message,
        details: err.details,
        success: false,
      });
    }
  }

  return res.status(err.code).json({ message: err.message, success: false });
}
