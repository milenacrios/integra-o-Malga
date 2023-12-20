import { NextFunction, Request, Response } from "express";
import { PublicKeyAcessService } from "../../publicKeyAcessService/publicKeyAcessService";
import { TokenizationCardService } from "../../tokenizationCardService/tokenizationCardService";
import { errorHandler } from "../../../middlewares/errorHandler";

const axios = require("axios");
const publicKeyAcessService = new PublicKeyAcessService();
const tokenizationCardService = new TokenizationCardService();

export class SaveTokenizedCardService {
  async saveTokenizedCard(req: Request, res: Response, next: NextFunction) {
    const clientId = "e56fce06-8bbc-4927-9e10-574424a73439";

    const response_api_key = await publicKeyAcessService.auth();
    const publicKey = response_api_key.data.publicKey; //conseguimos a chave pública.
    console.log("chave pública: ", publicKey);

    const response_token_id = await tokenizationCardService.tokenization();
    const tokenId = response_token_id.data.tokenId;
    console.log("tokenId: ", tokenId);
    //todo: verificar se já existe um id de cartão para não salvar novamente.
    //A API já faz isso automaticamente.

    try {
      const { data } = await axios.post(
        "https://sandbox-api.malga.io/v1/cards",
        {
          tokenId: tokenId, //mudar aqui
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
      errorHandler(error, req, res, next);
    }
  }
}
