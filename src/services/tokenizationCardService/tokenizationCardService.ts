import { PublicKeyAcessService } from "../publicKeyAcessService/publicKeyAcessService";

const axios = require("axios");
const publicKeyAcessService = new PublicKeyAcessService();

export class TokenizationCardService {
  //2 - Realizando tokenização de cartão:
  async tokenization() {
    const clientId = "e56fce06-8bbc-4927-9e10-574424a73439";
    const { data } = await publicKeyAcessService.auth();
    const publicKey = data.publicKey; //conseguimos a chave pública.
    console.log(publicKey);
    //Podemos usar auth
    try {
      const { data } = await axios.post(
        "https://sandbox-api.malga.io/v1/tokens",
        {
          //é possível criar vários tokens, mas eles são expirados. Então, o token criado anteriormente já era, o que vale é o novo.
          cardHolderName: "JOSE DAS NEVES",
          cardNumber: "4929564637987814",
          cardCvv: "120",
          cardExpirationDate: "12/2026",
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
    } catch (error) {
      console.error("Erro na autenticação:", error);
      throw new Error("Erro na tokenização");
    }
  }
}
