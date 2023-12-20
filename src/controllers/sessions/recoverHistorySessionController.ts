import { Request, Response } from "express";
import { NextFunction } from "express-serve-static-core";
import { RecoverHistorySessionService } from "../../services/sessions/recoverHistorySessionService";

export class RecoverHistorySessionController {
  private recoverHistorySessionService;

  constructor() {
    this.recoverHistorySessionService = new RecoverHistorySessionService();
  }
  async recoverHistorySession(
    id: any,
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const response =
        await this.recoverHistorySessionService.recoverHistorySession(
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
