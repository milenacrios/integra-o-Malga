import { NextFunction, Response } from "express";
import { ListDetailsCustomerCreatedService } from "../../services/customer/listDetailsCustomerCreatedService";

export class ListDetailsCustomerCreatedController {
  //objeto service:
  private listDetailsCustomerCreatedService;
  constructor() {
    this.listDetailsCustomerCreatedService =
      new ListDetailsCustomerCreatedService();
  }
  async getCustomerId(id: any, req: any, res: Response, next: NextFunction) {
    try {
      const response =
        await this.listDetailsCustomerCreatedService.getDetailsCustomerId(
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
