import { Request, Response } from "express";
import { NextFunction } from "express-serve-static-core";
import { CancelSessionService } from "../../services/sessions/cancelSessionService";

export class CancelSessionController {
  private cancelSessionService;

  constructor() {
    this.cancelSessionService = new CancelSessionService();
  }
  async cancelSession(
    id: any,
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const response = await this.cancelSessionService.cancelSession(
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
