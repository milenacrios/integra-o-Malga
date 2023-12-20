import { NextFunction, Request, Response } from "express";
import { CreateNewCustomerService } from "../../services/customer/createNewCustomerService";

export class CreateNewCustomerController {
  private createNewCustomerService;

  constructor() {
    this.createNewCustomerService = new CreateNewCustomerService();
  }

  async newCustomer(req: Request, res: Response, next: NextFunction) {
    try {
      const response = await this.createNewCustomerService.createNewCustomer(
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
