import { NextFunction, Request, Response, Router } from "express";
import { RecoverSessionCompanyDataController } from "../../controllers/sessions/recoverSessionCompanyDataController";

export const recoverSessionCompanyDataRouter = Router();

const recoverSessionCompanyDataController =
  new RecoverSessionCompanyDataController();

recoverSessionCompanyDataRouter.get(
  "/recoverSession-ConfigurationCompany/:id",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params.id;
      const response =
        await recoverSessionCompanyDataController.recoverSessionWithCompany(
          id,
          req,
          res,
          next
        );
      res.json(response);
    } catch (error) {
      next(error);
    }
  }
);
