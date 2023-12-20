import { Request } from "express";
import { NextFunction } from "express-serve-static-core";
import { PublicKeyAcessService } from "../../services/publicKeyAcessService/publicKeyAcessService";
import { errorHandler } from "../../middlewares/errorHandler";
const publicKeyAcessService = new PublicKeyAcessService();
const axios = require("axios");
export class CardToCustomerService {
  async newCardToCustomer(
    customerId: any,
    req: any,
    res: any,
    next: NextFunction
  ) {
    //credenciais:
    const clientId = "e56fce06-8bbc-4927-9e10-574424a73439";
    const response_api_key = await publicKeyAcessService.auth();
    const publicKey = response_api_key.data.publicKey;
    const cardId = "c77fa049-67ac-48d0-beea-7776323957d3";
    try {
      console.log("oi");
      const { data } = await axios.post(
        `https://api.malga.io/v1/customers/${customerId}/cards`,
        {
          cardId: cardId,
        },
        {
          headers: {
            "X-Client-ID": clientId,
            "X-Api-Key": publicKey,
          },
        }
      );

      return { cardId };
    } catch (error: any) {
      console.log("Deu erro?");
      console.log("Erro: ", error);
      errorHandler(error, req, res, next);
    }
  }
}
