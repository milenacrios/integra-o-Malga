import { NextFunction, Request, Response } from "express";
import { ListDetailsSessionService } from "../../services/sessions/listDetailsSessionService";

export class ListDetailsSessionController {
  private listDetailsSessionService;

  constructor() {
    this.listDetailsSessionService = new ListDetailsSessionService();
  }
  async getByIdSession(
    id: any,
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const response = await this.listDetailsSessionService.getByIdSession(
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
