import { Request, Response } from "express";
import { NextFunction } from "express-serve-static-core";
import { ListChargesService } from "../../services/charges/listChargesService";

export class ListChargesController {
  private listChargesService;

  constructor() {
    this.listChargesService = new ListChargesService();
  }

  async listCharges(req: Request, res: Response, next: NextFunction) {
    try {
      const response = await this.listChargesService.listCharges(
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
