import { NextFunction, Request } from "express";
import { ListDetailsChargeService } from "../../services/charges/listDetailChargeService";

export class ListDetailsChargeController {
  private listDetilsChargeService;

  constructor() {
    this.listDetilsChargeService = new ListDetailsChargeService();
  }
  async listChargeById(id: any, req: Request, res: any, next: NextFunction) {
    try {
      const response = await this.listDetilsChargeService.getByIdCharge(
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
