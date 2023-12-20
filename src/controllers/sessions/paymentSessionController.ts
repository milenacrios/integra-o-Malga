import { Request, Response } from "express";
import { NextFunction } from "express-serve-static-core";
import { PaymentSessionService } from "../../services/sessions/paymentSessionService";

export class PaymentSessionController {
  private paymentSessionService;

  constructor() {
    this.paymentSessionService = new PaymentSessionService();
  }
  async paymentSession(
    id: any,
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const response = await this.paymentSessionService.paymentSession(
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
}
