import { Request, Response } from "express";
import { NextFunction } from "express-serve-static-core";
import { PublicKeyAcessService } from "../publicKeyAcessService/publicKeyAcessService";
import { errorHandler } from "../../middlewares/errorHandler";

const axios = require("axios");
const publicKeyAcessService = new PublicKeyAcessService();

export class RecoverHistorySessionService {
  async recoverHistorySession(
    sessionId: any,
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    //credenciais:
    const clientId = "e56fce06-8bbc-4927-9e10-574424a73439";
    const { data } = await publicKeyAcessService.auth();
    const publicKey = data.publicKey;
    console.log("ID: ", sessionId);
    try {
      const { data } = await axios.get(
        `https://sandbox-api.malga.io/v1/sessions/${sessionId}/history`,
        {
          headers: {
            "X-Client-Id": clientId,
            "X-Api-Key": publicKey,
          },
        }
      );
      console.log({ data });
      return { data };
    } catch (error: any) {
      console.log(error);
      errorHandler(error, req, res, next);
    }
  }
}
