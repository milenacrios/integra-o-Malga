import { Request, Response } from "express";
import { NextFunction } from "express-serve-static-core";
import { PublicKeyAcessService } from "../publicKeyAcessService/publicKeyAcessService";
import { errorHandler } from "../../middlewares/errorHandler";

const axios = require("axios");

const publicKeyAcessService = new PublicKeyAcessService();

export class ChangeStatusAntifraudeChargeService {
  async changeStatusForAntifraude(
    chargId: any,
    req: Request,
    res: any,
    next: NextFunction
  ) {
    //credenciais:
    const clientId = "e56fce06-8bbc-4927-9e10-574424a73439";
    const response_api_key = await publicKeyAcessService.auth();
    const publicKey = response_api_key.data.publicKey;

    try {
      console.log("oiiiiiiii");
      const { data } = await axios.patch(
        `https://sandbox-api.malga.io/v1/charges/${chargId}/antifraud`,
        {
          status: "approved",
        },
        {
          headers: {
            "X-Client-ID": clientId,
            "X-Api-Key": publicKey,
            "Content-Type": "application/json",
          },
        }
      );
      console.log("aaaa: ", data);
      console.log("oiiiii");
      console.log("aaaa: ", { data });
      return { data };
    } catch (error: any) {
      errorHandler(error, req, res, next);
    }
  }
}
