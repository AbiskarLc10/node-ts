import { NextFunction } from "express";
import { ExpressError } from "./errorTypes";

export const customErrorHandler = (error: any, next: NextFunction) => {
  if (error instanceof ExpressError) {
    return next({
      message: error.message,
      code: error.code,
      details: error.details,
    } as ExpressError);
  }

  return next({
    message: error.message || "Failed to perform operations",
    code: error.code || 500,
  });
};
