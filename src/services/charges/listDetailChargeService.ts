import { NextFunction, Request, Response } from "express";
import { PublicKeyAcessService } from "../publicKeyAcessService/publicKeyAcessService";
const axios = require("axios");
const publicKeyAcessService = new PublicKeyAcessService();
export class ListDetailsChargeService {
  async getByIdCharge(
    customerId: any,
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    //credenciais
    const clientId = "e56fce06-8bbc-4927-9e10-574424a73439";
    const response_api_key = await publicKeyAcessService.auth();
    const publicKey = response_api_key.data.publicKey;

    try {
      const { data } = await axios.get(
        `https://api.malga.io/v1/charges/${customerId}`,
        {
          headers: {
            "X-Client-ID": clientId,
            "X-Api-Key": publicKey,
          },
        }
      );
      return { data };
    } catch (error) {
      next(error);
    }
  }
}
