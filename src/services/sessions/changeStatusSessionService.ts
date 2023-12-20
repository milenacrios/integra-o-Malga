import { Request, Response } from "express";
import { NextFunction } from "express-serve-static-core";
import { PublicKeyAcessService } from "../publicKeyAcessService/publicKeyAcessService";
import { errorHandler } from "../../middlewares/errorHandler";

const axios = require("axios");
const publicKeyAcessService = new PublicKeyAcessService();

export class ChangeStatusSessionService {
  async changeStatusSession(
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
      const { data } = await axios.patch(
        `https://sandbox-api.malga.io/v1/sessions/${sessionId}`,
        {
          //status is boolean and accepted true or false
          isActive: true,
        },
        {
          headers: {
            "X-Client-Id": clientId,
            "X-Api-Key": publicKey,
          },
        }
      );
      return { data };
    } catch (error: any) {
      console.log("aaaa:", error);
      errorHandler(error, req, res, next);
    }
  }
}
