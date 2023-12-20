import { Response } from "express";
import { PublicKeyAcessService } from "../publicKeyAcessService/publicKeyAcessService";
import { NextFunction } from "express-serve-static-core";
import { errorHandler } from "../../middlewares/errorHandler";

const axios = require("axios");
const publicKeyAcessService = new PublicKeyAcessService();

export class ChangeStatusChargeService {
  async changeStatusForCharge(
    chargeId: any,
    req: any,
    res: Response,
    next: NextFunction
  ) {
    console.log("O idddddddd: ", chargeId);
    //credenciais
    const clientId = "e56fce06-8bbc-4927-9e10-574424a73439";
    const response_api_key = await publicKeyAcessService.auth();
    const publicKey = response_api_key.data.publicKey;

    try {
      console.log("oiiiiiii");
      const { data } = await axios.post(
        `https://sandbox-api.malga.io/v1/charges/${chargeId}`,

        {
          status: "authorized",
          //verificar pq somente charged_back e authorized funciona
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
      console.log("erro: ", error);
      errorHandler(error, req, res, next);
    }
  }
}
