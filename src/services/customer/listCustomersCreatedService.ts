import { NextFunction, Request, Response } from "express";
import { PublicKeyAcessService } from "../publicKeyAcessService/publicKeyAcessService";

const axios = require("axios");

const publicKeyAcessService = new PublicKeyAcessService();

export class ListCustomersCreatedService {
  async customersAll(req: Request, res: Response, next: NextFunction) {
    const cliendId = "e56fce06-8bbc-4927-9e10-574424a73439";
    const { data } = await publicKeyAcessService.auth();
    const publicKey = data.publicKey;

    try {
      const { data } = await axios.get("https://api.malga.io/v1/customers", {
        headers: {
          "X-Client-ID": cliendId,
          "X-Api-Key": publicKey,
          "Content-Type": "application/json",
        },
      });
      return { data };
    } catch (error) {
      next(error);
    }
  }
}
