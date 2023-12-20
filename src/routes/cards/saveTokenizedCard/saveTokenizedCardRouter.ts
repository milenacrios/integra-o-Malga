import { NextFunction, Request, Response, Router, raw } from "express";
import { SaveTokenizedCardController } from "../../../controllers/cards/saveTokenizedController/saveTokenizedController";
//router só definimos o endpoint para o service mesmo
const axios = require("axios");

export const saveTokenizedCardRouter = Router();

const saveTokenizedCardController = new SaveTokenizedCardController();

saveTokenizedCardRouter.post(
  "/cards-tokenized",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const response = await saveTokenizedCardController.saveTokenizedCard(
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
