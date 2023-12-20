import { Request, Response } from "express";

const axios = require("axios");
//É no service que temos toda as regras de negócio
export class PublicKeyAcessService {
  //1 - Criando chave pública de acesso
  async auth() {
    const clientId = "e56fce06-8bbc-4927-9e10-574424a73439";
    const apiKey = "44829c89-ae91-4271-b347-5024a06a3fc3";
    try {
      const { data } = await axios.post(
        "https://sandbox-api.malga.io/v1/auth",
        {
          scope: [
            "tokens",
            "cards",
            "customers",
            "charges",
            "auth",
            "webhooks",
            "sessions",
            "reports",
            "flows",
            "sellers",
          ],
          expires: 31104000,
        },
        {
          headers: {
            "X-Client-Id": clientId,
            "X-Api-Key": apiKey,
            "Content-Type": "application/json",
          },
        }
      );
      //resposta do dado recebido
      return { data };
    } catch (error) {
      console.error("Erro na autenticação:", error);
      throw new Error("Erro na autenticação");
    }
  }
}

/**
 * Uma informação importante sobre autenticação:
 * no data-raw você sempre precisa passar o scope e definir quais serviços irão aceitar essa chave
 * pública. No exemplo acima, definimos que ela será "aceita" para serviços de tokens e cards.
 *
 */
