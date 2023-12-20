import { NextFunction, Request, Response, Router, response } from "express";
import { DeleteCustomerController } from "../../controllers/customer/deleteCustomerController";
import { ApiError } from "../../utils/api-errors";

const axios = require("axios");

export const deleteCustomerRouter = Router();

//objeto controller:
const deleteCustomerController = new DeleteCustomerController();

deleteCustomerRouter.delete(
  "/delete-customer/:id",
  async (req: any, res: Response, next: NextFunction) => {
    try {
      const id = req.params.id;
      const response = await deleteCustomerController.deleteCustomer(
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
