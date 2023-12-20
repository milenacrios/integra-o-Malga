import { NextFunction, Request, Response, Router, raw } from "express";
import { CreateNewCustomerController } from "../../controllers/customer/createNewCustomerController";
const axios = require("axios");

export const createNewCustomerRouter = Router();

//invocando o controller de create new customer
const createNewCustomerController = new CreateNewCustomerController();

createNewCustomerRouter.post(
  "/new-customer",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const response = await createNewCustomerController.newCustomer(
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
