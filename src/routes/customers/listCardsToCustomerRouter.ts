import { NextFunction, Request, Response, Router } from "express";
import { ListCardsToCustomerController } from "../../controllers/customer/listCardsToCustomerController";

const axios = require("axios");

export const listCardsToCustomerRouter = Router();

const listCardsToCustomerController = new ListCardsToCustomerController();

listCardsToCustomerRouter.get(
  "/list-cards-to-customer/:id",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params.id;
      const response = await listCardsToCustomerController.listCardsToCustomer(
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
