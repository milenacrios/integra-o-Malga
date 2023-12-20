import { NextFunction, Request, Response, Router } from "express";
import { CardToCustomerController } from "../../controllers/customer/cardToCustomerController";

const axios = require("axios");

export const cardToCustomerRouter = Router();

const cardToCustomerController = new CardToCustomerController();

cardToCustomerRouter.post(
  "/card-to-customer/:id",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params.id;
      const response = await cardToCustomerController.newCardToCustomer(
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
