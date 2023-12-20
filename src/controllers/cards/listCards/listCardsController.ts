import { NextFunction, Request, Response } from "express";
import { ListCardsService } from "../../../services/cards/listCardsService/listCardsService";

export class ListCardController {
  private listCardsService;

  constructor() {
    this.listCardsService = new ListCardsService();
  }

  async listCards(req: Request, res: Response, next: NextFunction) {
    try {
      const response = await this.listCardsService.listCardsAll();
      return response;
    } catch (error) {
      next(error);
    }
  }
}
