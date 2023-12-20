import { NextFunction, Request, Response } from "express";
import { NewChargeService } from "../../services/charges/newChargeService";

export class NewChargeController {
  private newChargeService;

  constructor() {
    this.newChargeService = new NewChargeService();
  }

  async newCharges(req: Request, res: Response, next: NextFunction) {
    try {
      const response = await this.newChargeService.createNewCharges(
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
