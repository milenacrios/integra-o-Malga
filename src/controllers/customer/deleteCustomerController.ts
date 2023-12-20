import { NextFunction, Request, Response } from "express";
import { DeleteCustomerService } from "../../services/customer/deleteCustomerService";

export class DeleteCustomerController {
  //objeto service
  private deleteCustomerService;

  constructor() {
    this.deleteCustomerService = new DeleteCustomerService();
  }
  async deleteCustomer(id: any, req: Request, res: any, next: NextFunction) {
    try {
      const response = await this.deleteCustomerService.deleteByCustomerId(
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
