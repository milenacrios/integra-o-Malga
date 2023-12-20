import { NextFunction, Request, Response } from "express";
import { Utils } from "./utils";

export const errorHandler = async (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log("Middleware Error Hadnling");
  const errStatus = Utils.statusCode;
  const errMsg = err.message || "Something went wrong";
  res.status(errStatus).json({
    sucess: false,
    status: errStatus,
    message: errMsg,
  });
};
