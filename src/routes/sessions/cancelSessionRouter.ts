import { NextFunction, Request, Response, Router } from "express";
import { CancelSessionController } from "../../controllers/sessions/cancelSessionController";

export const cancelSessionRouter = Router();

const cancelSessionController = new CancelSessionController();

cancelSessionRouter.post(
  "/cancel-session/:id",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params.id;
      const response = await cancelSessionController.cancelSession(
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
