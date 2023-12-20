import { Request } from "express";
import { NextFunction } from "express-serve-static-core";
import { ChangeStatusChargeService } from "../../services/charges/changeStatusChargeService";

export class ChangeStatusChargeRouter {
  private changeStatusChargeService;

  constructor() {
    this.changeStatusChargeService = new ChangeStatusChargeService();
  }
  async changeStatusForCharge(
    id: any,
    req: Request,
    res: any,
    next: NextFunction
  ) {
    console.log("IDDDDD: ", id);
    try {
      const response =
        await this.changeStatusChargeService.changeStatusForCharge(
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
