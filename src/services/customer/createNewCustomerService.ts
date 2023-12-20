import { NextFunction, Request, Response } from "express";
import { PublicKeyAcessService } from "../publicKeyAcessService/publicKeyAcessService";
import { errorHandler } from "../../middlewares/errorHandler";
const axios = require("axios");

//chamar credenciais de autenticação:
const publicKeyAcessService = new PublicKeyAcessService();

export class CreateNewCustomerService {
  async createNewCustomer(req: Request, res: Response, next: NextFunction) {
    const cliendId = "e56fce06-8bbc-4927-9e10-574424a73439";
    const { data } = await publicKeyAcessService.auth();
    const publicKey = data.publicKey;

    try {
      const { data } = await axios.post(
        "https://api.malga.io/v1/customers",
        {
          //dados pessoais do cliente:
          name: "aaa",
          email: "sss@gmail.com",
          phoneNumber: "6796958-5868",
          document: {
            type: "cpf",
            number: "153.556.700-75",
            country: "BR",
          },
          address: {
            street: "Av A Cardoso",
            streetNumber: "32",
            complement: "Apto 55",
            zipCode: "12345678",
            country: "BR",
            state: "Rio de Janeiro",
            city: "Rio de Janeiro",
            district: "q",
          },
        },
        {
          headers: {
            "X-Client-ID": cliendId,
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
