import { Request, NextFunction, Response, Router } from "express";
import { ChangeStatusAntifraudeChargeController } from "../../controllers/charges/changeStatusAntifraudeChargeController";

const axios = require("axios");

export const changeStatusAntifraudeChargeRouter = Router();

const changeStatusAntifraudeChargeController =
  new ChangeStatusAntifraudeChargeController();

changeStatusAntifraudeChargeRouter.patch(
  "/status-antifraude/:id",
  async (req: Request, res: any, next: NextFunction) => {
    try {
      const id = req.params.id;
      console.log("IDDD: ", id);
      const response =
        changeStatusAntifraudeChargeController.changeStatusAntifraude(
          id,
          req,
          res,
          next
        );
      return response;
    } catch (error) {
      next(error);
    }
  }
);
