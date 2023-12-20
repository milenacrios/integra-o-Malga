import { NextFunction, Request, Response } from "express";
import { ChangeStatusSessionService } from "../../services/sessions/changeStatusSessionService";

export class ChangeStatusSessionController {
  private changeStatusSessionService;

  constructor() {
    this.changeStatusSessionService = new ChangeStatusSessionService();
  }
  async changeStatusSession(
    id: any,
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const response =
        await this.changeStatusSessionService.changeStatusSession(
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
