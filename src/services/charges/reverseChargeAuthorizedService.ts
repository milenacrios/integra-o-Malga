import { Request, Response } from "express";
import { NextFunction } from "express-serve-static-core";
import { PublicKeyAcessService } from "../publicKeyAcessService/publicKeyAcessService";
import { errorHandler } from "../../middlewares/errorHandler";
const axios = require("axios");
const publicKeyAcessService = new PublicKeyAcessService();
export class ReverseChargeAuthorizedService {
  async reverseCharge(
    chargeId: any,
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    //credenciais:
    const clientId = "e56fce06-8bbc-4927-9e10-574424a73439";
    const response_api_key = await publicKeyAcessService.auth();
    const publicKey = response_api_key.data.publicKey;

    try {
      const { data } = await axios.post(
        `https://sandbox-api.malga.io/v1/charges/${chargeId}/void`,
        {
          amount: 50,
        },
        {
          headers: {
            "X-Client-ID": clientId,
            "X-Api-Key": publicKey,
            "Content-Type": "application/json",
          },
        }
      );
      return { data };
    } catch (error: any) {
      errorHandler(error, req, res, next);
    }
  }
}
