/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, Response, NextFunction } from "express";

interface Error {
  status?: number;
  message?: string;
  stack?: string;
}

export const errorMiddleWare = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "something went wrong!";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
};
