import { Request, Response } from "express";
import { NextFunction } from "express-serve-static-core";
import { ChangeStatusAntifraudeChargeService } from "../../services/charges/changeStatusAntifraudeChargeService";

export class ChangeStatusAntifraudeChargeController {
  private changeStatusAntifraudeChargeService;

  constructor() {
    this.changeStatusAntifraudeChargeService =
      new ChangeStatusAntifraudeChargeService();
  }
  async changeStatusAntifraude(
    id: any,
    req: Request,
    res: any,
    next: NextFunction
  ) {
    try {
      const response =
        await this.changeStatusAntifraudeChargeService.changeStatusForAntifraude(
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
