import { NextFunction, Request, Response } from "express";
import { NewSessionService } from "../../services/sessions/newSessionService";

export class NewSessionController {
  private newSessionService;

  constructor() {
    this.newSessionService = new NewSessionService();
  }
  async newSession(req: Request, res: Response, next: NextFunction) {
    try {
      const response = await this.newSessionService.newSession(req, res, next);
      return response;
    } catch (error) {
      next(error);
    }
  }
}
