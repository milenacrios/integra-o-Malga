import { NextFunction, Request, Response, Router } from "express";
import { UpdateCustomerController } from "../../controllers/customer/updateCustomerController";

const axios = require("axios");
export const updateCustomerRouter = Router();

const updateCustomerController = new UpdateCustomerController();

updateCustomerRouter.patch(
  "/update-customer/:id",
  async (req: any, res: any, next: NextFunction) => {
    try {
      const id = req.params.id;
      const response = await updateCustomerController.updateCustomer(
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
