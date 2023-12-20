import { NextFunction, Request, Response, Router } from "express";
import { ChangeStatusChargeRouter } from "../../controllers/charges/changeStatusChargeController";

const axios = require("axios");

export const changeStatusChargeRouter = Router();

const changeStatusChargeController = new ChangeStatusChargeRouter();

changeStatusChargeRouter.post(
  "/change-status-charge/:id",
  async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;
    console.log("Id: ", id);
    try {
      const response = await changeStatusChargeController.changeStatusForCharge(
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
