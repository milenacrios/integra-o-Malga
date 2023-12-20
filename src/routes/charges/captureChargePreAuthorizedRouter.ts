import { NextFunction, Request, Response, Router, response } from "express";
import { CaptureChargePreAuthorizedController } from "../../controllers/charges/captureChargePreAuthorizedController";

const axios = require("axios");

export const captureChargePreAuthorizedRouter = Router();

const captureChargePreAuthorizedController =
  new CaptureChargePreAuthorizedController();

captureChargePreAuthorizedRouter.post(
  "/capture-charge/:id",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params.id;
      const response =
        await captureChargePreAuthorizedController.captureChargePreAuthorized(
          id,
          req,
          res,
          next
        );
      console.log("Respoonse: ", response);
      res.json(response);
    } catch (error) {
      next(error);
    }
  }
);
