import axios from "axios";
import { PublicKeyAcessService } from "../../publicKeyAcessService/publicKeyAcessService";
import { ListCardsService } from "../listCardsService/listCardsService";
import { NextFunction } from "express";
import { errorHandler } from "../../../middlewares/errorHandler";

const publicKeyAcessService = new PublicKeyAcessService();
const listCardsService = new ListCardsService();

export class ListDetailCardService {
  async listCardDetails(cardId: any, req: any, res: any, next: NextFunction) {
    console.log(cardId);
    const clientId = "e56fce06-8bbc-4927-9e10-574424a73439";
    const response_api_key = await publicKeyAcessService.auth();
    const publicKey = response_api_key.data.publicKey;

    const response_card_id = await listCardsService.listCardsAll();
    const card_id = response_card_id.data.id;
    console.log(card_id);
    try {
      const { data } = await axios.get(
        `https://api.malga.io/v1/cards/${cardId}`,
        {
          headers: {
            "X-Client-Id": clientId,
            "X-Api-Key": publicKey,
          },
        }
      );
      return { data };
    } catch (error: any) {
      errorHandler(error, req, res, next);
    }
  }
}
