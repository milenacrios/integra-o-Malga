import { Request, Response } from "express";
import { NextFunction } from "express-serve-static-core";
import { RecoverSessionCompanyDataService } from "../../services/sessions/recoverSessionCompanyDataService";

export class RecoverSessionCompanyDataController {
  private recoverSessionCompanyDataService;

  constructor() {
    this.recoverSessionCompanyDataService =
      new RecoverSessionCompanyDataService();
  }
  async recoverSessionWithCompany(
    id: any,
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const response =
        await this.recoverSessionCompanyDataService.recoverSessionWithCompany(
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
