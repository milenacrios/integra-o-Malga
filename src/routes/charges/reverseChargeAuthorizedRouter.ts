import { NextFunction, Request, Response, Router } from "express";
import { ReverseChargeAuthorizedController } from "../../controllers/charges/reverseChargeAuthorizedController";

const axios = require("axios");

export const reverseChargeAuthorizedRouter = Router();

const reverseChargeAuthorizedController =
  new ReverseChargeAuthorizedController();

reverseChargeAuthorizedRouter.post(
  "/reverese-charge-authorized/:id",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params.id;
      const response = await reverseChargeAuthorizedController.reverseCharge(
        id,
        req,
        res,
        next
      );
      res.json(response);
    } catch (error) {
      next(error);
    }
  }
);
