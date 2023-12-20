import { NextFunction, Request, Response, Router } from "express";
import { ListDetailsChargeController } from "../../controllers/charges/listDetailsChargeController";

const axios = require("axios");

export const listDetailsChargRouter = Router();

const listDetailsChargeController = new ListDetailsChargeController();

listDetailsChargRouter.get(
  "/details-charge/:id",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params.id;
      const response = await listDetailsChargeController.listChargeById(
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
