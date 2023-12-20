import { Request, Response } from "express";
import { NextFunction } from "express-serve-static-core";
import { CardToCustomerService } from "../../routes/customers/cardToCustomerService";

export class CardToCustomerController {
  private cardToCustomerService;
  constructor() {
    this.cardToCustomerService = new CardToCustomerService();
  }
  async newCardToCustomer(
    customerId: any,
    req: any,
    res: Response,
    next: NextFunction
  ) {
    try {
      const response = await this.cardToCustomerService.newCardToCustomer(
        customerId,
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
