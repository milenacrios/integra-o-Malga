import { Request, Response } from "express";
import { NextFunction } from "express-serve-static-core";
import { PublicKeyAcessService } from "../publicKeyAcessService/publicKeyAcessService";

const axios = require("axios");
const publicKeyAcessService = new PublicKeyAcessService();

export class RecoverSessionCompanyDataService {
  async recoverSessionWithCompany(
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
      const { data } = await axios.get(
        `https://sandbox-api.malga.io/v1/sessions/${sessionId}/link`,
        {
          headers: {
            "X-Client-Id": clientId,
            "X-Api-Key": publicKey,
          },
        }
      );
      return { data };
    } catch (error) {
      next(error);
    }
  }
}
