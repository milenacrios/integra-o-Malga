import { NextFunction, Request, Response, Router, raw } from "express";
import { SaveTokenizedCardService } from "../../../services/cards/saveTokenizedCardService/saveTokenizedCardService";

export class SaveTokenizedCardController {
  private saveTokenizedCardService;

  constructor() {
    this.saveTokenizedCardService = new SaveTokenizedCardService();
  }

  async saveTokenizedCard(req: Request, res: Response, next: NextFunction) {
    try {
      const response = await this.saveTokenizedCardService.saveTokenizedCard(
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
