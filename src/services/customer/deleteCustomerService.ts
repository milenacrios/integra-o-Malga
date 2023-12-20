import { UUID } from "crypto";
import { PublicKeyAcessService } from "../publicKeyAcessService/publicKeyAcessService";
import { listDetailsCustomerCreatedRouter } from "../../routes/customers/listDetailsCustomerCreatedRouter";
import { ListDetailsCustomerCreatedService } from "./listDetailsCustomerCreatedService";
import { NextFunction, Request, Response } from "express";
import { errorHandler } from "../../middlewares/errorHandler";

const axios = require("axios");

const publicKeyAcessService = new PublicKeyAcessService();
const getCustomerService = new ListDetailsCustomerCreatedService();

export class DeleteCustomerService {
  async deleteByCustomerId(
    customerId: any,
    req: any,
    res: any,
    next: NextFunction
  ) {
    //console.log(customerId);
    //credenciais:
    const clientId = "e56fce06-8bbc-4927-9e10-574424a73439";
    const response_api_key = await publicKeyAcessService.auth();
    const publicKey = response_api_key.data.publicKey;
    try {
      const { data } = await axios.delete(
        `https://api.malga.io/v1/customers/${customerId}`,
        {
          headers: {
            "X-Client-Id": clientId,
            "X-Api-Key": publicKey,
          },
        }
      );
      return { data };
    } catch (error: any) {
      //todo: ainda continua crashando a aplicação.
      errorHandler(error, req, res, next);
    }
  }
}
