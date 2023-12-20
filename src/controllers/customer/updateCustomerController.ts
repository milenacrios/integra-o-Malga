import { Request, Response } from "express";
import { NextFunction } from "express-serve-static-core";
import { UpdateCustomerService } from "../../services/customer/updateCustomerService";

export class UpdateCustomerController {
  private updateCustomerService;
  constructor() {
    this.updateCustomerService = new UpdateCustomerService();
  }
  async updateCustomer(
    customerId: any,
    req: any,
    res: any,
    next: NextFunction
  ) {
    try {
      const response = await this.updateCustomerService.updateCustomerById(
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
