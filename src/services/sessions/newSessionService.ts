import { NextFunction, Request, Response } from "express";
import { PublicKeyAcessService } from "../publicKeyAcessService/publicKeyAcessService";
import { errorHandler } from "../../middlewares/errorHandler";

const axios = require("axios");

const publicKeyAcessService = new PublicKeyAcessService();

export class NewSessionService {
  async newSession(req: Request, res: Response, next: NextFunction) {
    //credenciais:
    const clientId = "e56fce06-8bbc-4927-9e10-574424a73439";
    const { data } = await publicKeyAcessService.auth();
    const publicKey = data.publicKey;
    const merchantId = "46111b48-2091-40b6-882c-38d636f5175f";
    try {
      const { data } = await axios.post(
        "https://sandbox-api.malga.io/v1/sessions",
        {
          amount: 100,
          merchantId: merchantId,
          dueDate: "2024-10-25T09:28:45.000Z",
          createLink: true,
          name: "Loja do zé",
          paymentMethods: [
            {
              paymentType: "pix",
              expiresIn: 30,
            },
          ],
          items: [
            {
              name: "Item 1",
              description: "Item do carrinho",
              unitPrice: 1000,
              quantity: 1,
              tangible: false,
            },
          ],
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
      console.log(error);
      errorHandler(error, req, res, next);
    }
  }
}
