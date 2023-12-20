import { NextFunction, Request, Response } from "express";
import { ListDetailCardService } from "../../../services/cards/listDetailsCardService/listDetailsCardService";

export class ListCardDetailsController {
  private listDetailCardService;

  constructor() {
    this.listDetailCardService = new ListDetailCardService();
  }

  async listCardId(id: any, req: Request, res: any, next: NextFunction) {
    try {
      const response = await this.listDetailCardService.listCardDetails(
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
