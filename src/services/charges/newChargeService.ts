import { Request, Response } from "express";
import { NextFunction } from "express-serve-static-core";
import { PublicKeyAcessService } from "../publicKeyAcessService/publicKeyAcessService";
import { errorHandler } from "../../middlewares/errorHandler";

const axios = require("axios");

const publicKeyAcessService = new PublicKeyAcessService();

export class NewChargeService {
  async createNewCharges(req: Request, res: Response, next: NextFunction) {
    //credenciais:
    const clientId = "e56fce06-8bbc-4927-9e10-574424a73439";
    const merchantId = "46111b48-2091-40b6-882c-38d636f5175f";
    const response_api_key = await publicKeyAcessService.auth();
    const publicKey = response_api_key.data.publicKey;

    try {
      const { data } = await axios.post(
        "https://sandbox-api.malga.io/v1/charges",
        {
          merchantId: merchantId,
          amount: 350,
          currency: "BRL",
          paymentMethod: {
            paymentType: "credit",
            installments: 1,
          },
          paymentSource: {
            sourceType: "card",
            card: {
              cardHolderName: "JOSE DAS NEVES",
              cardNumber: "4929564637987814",
              cardCvv: "120",
              cardExpirationDate: "12/2026",
            },
          },
          fraudAnalysis: {
            sla: 10,
            customer: {
              name: "Joao Torres",
              phone: "11 99329899",
              email: "joao@gmail.com",
              identity: "45762964852",
              identityType: "CPF",
              registrationDate: "2022-07-26T16:11:35.756Z",
              billingAddress: {
                street: "Rua Um",
                number: "200",
                zipCode: "02010010",
                country: "BR",
                state: "SP",
                district: "Jardim Paraiso",
                city: "Sao Paulo",
                complement: "ap 10",
              },
              browser: {
                browserFingerprint: "074c1ee676ed4998ab66491013c565e2",
                cookiesAccepted: false,
                email: "comprador@test.com.br",
                hostName: "google.com",
                ipAddress: "127.0.0.1",
                type: "Chrome",
              },
            },
            cart: {
              items: [
                {
                  name: "ItemTeste1",
                  quantity: 1,
                  sku: "20170511",
                  unitPrice: 100,
                  risk: "High",
                  locality: "Local do evento",
                  date: "2017-03-21T22:36:53",
                  type: 1,
                  genre: "Concerto de música",
                  tickets: {
                    quantityTicketSale: 800,
                    quantityEventHouse: 2,
                    convenienceFeeValue: 0,
                    quantityFull: 100,
                    quantityHalf: 50,
                    batch: 1234123,
                  },
                  location: {
                    country: "BR",
                    street: "Rua Um",
                    number: "2",
                    complement: "ap 1",
                    zipCode: "02417140",
                    city: "Sao Paulo",
                    state: "SP",
                    district: "Bairro",
                  },
                },
              ],
            },
          },
        },
        {
          headers: {
            "X-Client-ID": clientId,
            "X-Api-Key": publicKey,
            "Content-Type": "application/json",
          },
        }
      );
      console.log("data: ", { data });
      return { data };
    } catch (error: any) {
      console.log("deu erro aqui?");
      console.log(error);
      errorHandler(error, req, res, next);
    }
  }
}
