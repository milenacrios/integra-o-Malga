import { NextFunction, Request, Response, Router } from "express";
import { RecoverHistorySessionController } from "../../controllers/sessions/recoverHistorySessionController";

export const recoverHistorySessionRouter = Router();

const recoverHistorySessionController = new RecoverHistorySessionController();

recoverHistorySessionRouter.get(
  "/recoverHistory-session/:id",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params.id;
      const response =
        await recoverHistorySessionController.recoverHistorySession(
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
