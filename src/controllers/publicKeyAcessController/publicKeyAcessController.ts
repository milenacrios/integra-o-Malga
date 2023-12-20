import { NextFunction, Request, Response, Router, raw } from "express";
import { PublicKeyAcessService } from "../../services/publicKeyAcessService/publicKeyAcessService";

const axios = require("axios");
export const router = Router();
//controller apenas chama o service
export class PublicKeyAcessController {
  private publicKeyService;

  constructor() {
    this.publicKeyService = new PublicKeyAcessService();
  }

  async authenticate(req: Request, res: Response, next: NextFunction) {
    try {
      //chamando o service
      const response = await this.publicKeyService.auth();
      return response;
    } catch (error) {
      next(error);
    }
  }
}
