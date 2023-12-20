import { NextFunction, Request, Response } from "express";
import { ReverseChargeAuthorizedService } from "../../services/charges/reverseChargeAuthorizedService";

export class ReverseChargeAuthorizedController {
  private reverseChargeAuthorizedService;

  constructor() {
    this.reverseChargeAuthorizedService = new ReverseChargeAuthorizedService();
  }
  async reverseCharge(
    id: any,
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const response = await this.reverseChargeAuthorizedService.reverseCharge(
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
