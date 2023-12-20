import { NextFunction, Request, Response, Router } from "express";
import { ListCustomersCreatedController } from "../../controllers/customer/listCustomersCreatedController";

const axios = require("axios");
export const listCustomersCreatedRouter = Router();

const listCustomersCreatedController = new ListCustomersCreatedController();

listCustomersCreatedRouter.get(
  "/customers",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const response = await listCustomersCreatedController.listCustomers(
        req,
        res,
        next
      );
      res.json(response);
    } catch (error) {
      res.status(400).json(error);
    }
  }
);
