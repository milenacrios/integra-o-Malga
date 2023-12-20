import { NextFunction, Request, Response, Router } from "express";
import { NewSessionController } from "../../controllers/sessions/newSessionController";

export const newSessionRouter = Router();

const newSessionController = new NewSessionController();

newSessionRouter.post(
  "/new-session",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const response = await newSessionController.newSession(req, res, next);
      res.json(response);
    } catch (error) {
      next(error);
    }
  }
);
