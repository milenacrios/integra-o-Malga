import { NextFunction, Request, Response } from "express";
import { CaptureChargePreAuthorizedService } from "../../services/charges/captureChargePreAuthorizedService";

export class CaptureChargePreAuthorizedController {
  private captureChargePreAuthorizedService;

  constructor() {
    this.captureChargePreAuthorizedService =
      new CaptureChargePreAuthorizedService();
  }

  async captureChargePreAuthorized(
    id: any,
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const response =
        await this.captureChargePreAuthorizedService.captureChargePreAuthorized(
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
