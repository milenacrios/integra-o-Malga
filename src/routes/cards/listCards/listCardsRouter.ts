import { NextFunction, Request, Response, Router } from "express";
import { ListCardController } from "../../../controllers/cards/listCards/listCardsController";
//router só definimos o endpoint para o service mesmo
const axios = require("axios");

export const listCardsRouter = Router();

const listCardController = new ListCardController();

listCardsRouter.get(
  "/list-cards",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const response = await listCardController.listCards(req, res, next);
      res.json(response);
    } catch (error) {
      next(error);
    }
  }
);
