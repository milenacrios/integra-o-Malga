import { NextFunction, Request, Response } from "express";
import { ListCustomersCreatedService } from "../../services/customer/listCustomersCreatedService";

export class ListCustomersCreatedController {
  //chamar o service:
  private listCustomersCreatedService;

  constructor() {
    this.listCustomersCreatedService = new ListCustomersCreatedService();
  }
  async listCustomers(req: Request, res: Response, next: NextFunction) {
    try {
      const response = await this.listCustomersCreatedService.customersAll(
        req,
        res,
        next
      );
      return response;
    } catch (error) {
      throw new Error("Erro na criação de customer");
    }
  }
}
