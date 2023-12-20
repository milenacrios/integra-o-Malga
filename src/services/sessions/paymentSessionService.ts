import { Request, Response } from "express";
import { NextFunction } from "express-serve-static-core";
import { PublicKeyAcessService } from "../publicKeyAcessService/publicKeyAcessService";
import { errorHandler } from "../../middlewares/errorHandler";

const axios = require("axios");
const publicKeyAcessService = new PublicKeyAcessService();

export class PaymentSessionService {
  async paymentSession(
    sessionId: any,
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    //credenciais:
    const clientId = "e56fce06-8bbc-4927-9e10-574424a73439";
    const { data } = await publicKeyAcessService.auth();
    const publicKey = data.publicKey;

    try {
      const { data } = await axios.post(
        `https://sandbox-api.malga.io/v1/sessions/${sessionId}/charge`,
        {
          paymentMethod: {
            paymentType: "credit",
            installments: 1,
          },
          paymentSource: {
            sourceType: "card",
            card: {
              cardNumber: "5261424250184574",
              cardCvv: "321",
              cardExpirationDate: "06/2028",
              cardHolderName: "JOAO DA SILVA",
            },
          },
        },
        {
          headers: {
            "X-Client-Id": clientId,
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
