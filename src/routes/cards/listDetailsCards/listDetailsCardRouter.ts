import { NextFunction, Request, Response, Router } from "express";
import { ListCardDetailsController } from "../../../controllers/cards/listDetailsCard/listDetailCardController";

const axios = require("axios");

export const listCardDetailsRouter = Router();

const listCardDetailsController = new ListCardDetailsController();

listCardDetailsRouter.get(
  "/card-id/:id",
  async (req: any, res: Response, next: NextFunction) => {
    try {
      const id = req.params.id;

      const response = await listCardDetailsController.listCardId(
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
