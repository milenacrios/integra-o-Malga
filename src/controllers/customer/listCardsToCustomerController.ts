import { Request, Response } from "express";
import { NextFunction } from "express-serve-static-core";
import { listCardsToCustomerService } from "../../services/customer/listCardsToCustomerService";

export class ListCardsToCustomerController {
  private listCardsToCustomerService;
  constructor() {
    this.listCardsToCustomerService = new listCardsToCustomerService();
  }
  async listCardsToCustomer(
    id: any,
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const response =
        await this.listCardsToCustomerService.listCardsToCustomer(
          id,
          req,
          res,
          next
        );
      return response;
    } catch (error) {
      next(error);
    }
  }
}
