import { NextFunction, Request, Response } from "express";
import { TokenizationCardService } from "../../services/tokenizationCardService/tokenizationCardService";

export class TokenizationCardController {
  private tokenizationCardService;

  constructor() {
    this.tokenizationCardService = new TokenizationCardService();
  }

  async tokenizationCard(req: Request, res: Response, next: NextFunction) {
    try {
      //chamando o service
      const response = await this.tokenizationCardService.tokenization();
      return response;
    } catch (error) {
      next(error);
    }
  }
}
