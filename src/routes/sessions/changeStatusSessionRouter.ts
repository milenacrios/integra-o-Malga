import { NextFunction, Request, Response, Router } from "express";
import { ChangeStatusSessionController } from "../../controllers/sessions/changeStatusSessionController";

export const changeStatusSessionRouter = Router();

const changeStatusSessionController = new ChangeStatusSessionController();

changeStatusSessionRouter.patch(
  "/changeStatus-session/:id",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params.id;
      const response = await changeStatusSessionController.changeStatusSession(
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
