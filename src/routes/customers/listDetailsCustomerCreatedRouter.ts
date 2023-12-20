import { NextFunction, Request, Response, Router } from "express";
import { ListDetailsCustomerCreatedController } from "../../controllers/customer/listDetailsCustomerCreatedController";

const axios = require("axios");

export const listDetailsCustomerCreatedRouter = Router();

//objeto controller:
const listDetailsCustomerCreatedController =
  new ListDetailsCustomerCreatedController();

listDetailsCustomerCreatedRouter.get(
  "/details-customerId/:id",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params.id;
      const response = await listDetailsCustomerCreatedController.getCustomerId(
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
