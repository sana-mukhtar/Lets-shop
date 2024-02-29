import  { NextFunction, Request, Response } from "express";

export const errorMiddleWare = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {

    err.message ||= "";

  return res.status(400).json({
    success: false,
    message: err.message,
  });
};
