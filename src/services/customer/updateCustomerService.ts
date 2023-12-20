import { Request, NextFunction, Response } from "express";
import { PublicKeyAcessService } from "../publicKeyAcessService/publicKeyAcessService";
import { errorHandler } from "../../middlewares/errorHandler";
const axios = require("axios");
const publicKeyAcessService = new PublicKeyAcessService();
export class UpdateCustomerService {
  async updateCustomerById(
    customerId: any,
    req: any,
    res: any,
    next: NextFunction
  ) {
    //credenciais:
    const clientId = "e56fce06-8bbc-4927-9e10-574424a73439";
    const response_api_key = await publicKeyAcessService.auth();
    const publicKey = response_api_key.data.publicKey;
    try {
      const { data } = await axios.patch(
        `https://api.malga.io/v1/customers/${customerId}`,
        {
          name: "Milena Teste",
          phoneNumber: "67981342588",
          address: {
            street: "Av Maria da Silva",
            streetNumber: "567",
            complement: "Apto 77",
            zipCode: "12345678",
            country: "BR",
            state: "Bahia",
            city: "Angical",
            district: "q",
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
      console.log("deu erro?");
      errorHandler(error, req, res, next);
    }
  }
}
