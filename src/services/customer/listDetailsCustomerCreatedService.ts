import { NextFunction } from "express";
import { PublicKeyAcessService } from "../publicKeyAcessService/publicKeyAcessService";
import { errorHandler } from "../../middlewares/errorHandler";

const axios = require("axios");

const publicKeyAcessService = new PublicKeyAcessService();

export class ListDetailsCustomerCreatedService {
  async getDetailsCustomerId(
    customerId: any,
    req: any,
    res: any,
    next: NextFunction
  ) {
    console.log(customerId);

    const clientId = "e56fce06-8bbc-4927-9e10-574424a73439";
    const { data } = await publicKeyAcessService.auth();
    const publicKey = data.publicKey;

    try {
      const { data } = await axios.get(
        `https://api.malga.io/v1/customers/${customerId}`,
        {
          headers: {
            "X-Client-Id": clientId,
            "X-Api-Key": publicKey,
            "Content-Type": "application/json",
          },
        }
      );
      console.log("data: ", { data });
      return { data };
    } catch (error: any) {
      errorHandler(error, req, res, next);
    }
  }
}
