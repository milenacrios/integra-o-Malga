import { NextFunction, Request, Response, Router, raw } from "express";
import { PublicKeyAcessController } from "../../controllers/publicKeyAcessController/publicKeyAcessController";

const axios = require("axios");

export const publicKeyRouter = Router();

//invocamos o controller:
const publicKeyController = new PublicKeyAcessController();

publicKeyRouter.post(
  "/authenticate",
  async (req: Request, res: Response, next: NextFunction) => {
    //consumindo a api
    try {
      const response = await publicKeyController.authenticate(req, res, next);
      res.json(response);
    } catch (error) {
      next(error);
    }
  }
);
