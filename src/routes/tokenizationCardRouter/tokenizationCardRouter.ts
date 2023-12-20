import { NextFunction, Request, Response, Router, raw } from "express";
import { TokenizationCardController } from "../../controllers/tokenizationCardController/tokenizationCardController";

const axios = require("axios");

export const tokenizationCardRouter = Router();

const tokenizationCardController = new TokenizationCardController();

tokenizationCardRouter.post(
  "/tokens",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const response = await tokenizationCardController.tokenizationCard(
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
