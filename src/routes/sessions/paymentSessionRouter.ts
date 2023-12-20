import { NextFunction, Request, Response, Router } from "express";
import { PaymentSessionController } from "../../controllers/sessions/paymentSessionController";

export const paymentSessionRouter = Router();

const paymentSessionController = new PaymentSessionController();

paymentSessionRouter.post(
  "/payment-session/:id",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params.id;
      const response = await paymentSessionController.paymentSession(
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
