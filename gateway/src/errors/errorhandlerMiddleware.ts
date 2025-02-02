import { NextFunction, Request, Response } from "express";
import {  ExpressError } from "./errorTypes";

export async function errorMiddleware(
  err: ExpressError,
  req: Request,
  res: Response,
  next: NextFunction
) {
  const message = err.message || "Operation Failed";
  const statusCode = err.statusCode || 500;
  const details = err.details || "Error from backed";

  return res.status(statusCode).json({
    message,
    statusCode,
    details,
  });
}
