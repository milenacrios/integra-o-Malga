import axios from "axios";
import { PublicKeyAcessService } from "../../publicKeyAcessService/publicKeyAcessService";

const publicKeyAcessService = new PublicKeyAcessService();
export class ListCardsService {
  async listCardsAll() {
    const clientId = "e56fce06-8bbc-4927-9e10-574424a73439";
    const response_api_key = await publicKeyAcessService.auth();
    const publicKey = response_api_key.data.publicKey;

    try {
      const { data } = await axios.get("https://api.malga.io/v1/cards", {
        params: {
          page: 1,
          limit: 10,
        },
        headers: {
          "X-Client-Id": clientId,
          "X-Api-Key": publicKey,
        },
      });
      return { data };
    } catch (error) {
      console.error("Erro na autenticação:", error);
      throw new Error("Erro na autenticação");
    }
  }
}
