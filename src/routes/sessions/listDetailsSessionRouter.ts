import { NextFunction, Request, Response, Router } from "express";
import { ListDetailsSessionController } from "../../controllers/sessions/lisDetailsSessionController";

export const listDetailsSessionRouter = Router();

const listDetailsSessionController = new ListDetailsSessionController();

listDetailsSessionRouter.get(
  "/details-session/:id",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params.id;
      const response = await listDetailsSessionController.getByIdSession(
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
