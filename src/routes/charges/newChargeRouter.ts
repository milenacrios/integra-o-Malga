import { NextFunction, Request, Response, Router } from "express";
import { NewChargeController } from "../../controllers/charges/newChargeController";

const axios = require("axios");

export const newChargeRouter = Router();

const newChargeController = new NewChargeController();

newChargeRouter.post(
  "/new-charges",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const response = await newChargeController.newCharges(req, res, next);
      res.json(response);
    } catch (error) {
      next(error);
    }
  }
);
