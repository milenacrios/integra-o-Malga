import { NextFunction, Request, Response, Router } from "express";
import { ListChargesController } from "../../controllers/charges/listChargesController";

const axios = require("axios");

export const listChargesRouter = Router();

const listChargesController = new ListChargesController();

listChargesRouter.get(
  "/list-charges",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const response = await listChargesController.listCharges(req, res, next);
      res.json(response);
    } catch (error) {
      next(error);
    }
  }
);
