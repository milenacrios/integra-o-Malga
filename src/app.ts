import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import logger from "morgan";
import { publicKeyRouter } from "./routes/publicKeyAcessRouter/publicKeyAcessRouter";
import { tokenizationCardRouter } from "./routes/tokenizationCardRouter/tokenizationCardRouter";
import { saveTokenizedCardRouter } from "./routes/cards/saveTokenizedCard/saveTokenizedCardRouter";
import { listCardsRouter } from "./routes/cards/listCards/listCardsRouter";
import { listCardDetailsRouter } from "./routes/cards/listDetailsCards/listDetailsCardRouter";
import { createNewCustomerRouter } from "./routes/customers/createNewCustomerRouter";
import { listCustomersCreatedRouter } from "./routes/customers/listCustomersCreatedRouter";
import { listDetailsCustomerCreatedRouter } from "./routes/customers/listDetailsCustomerCreatedRouter";
import { deleteCustomerRouter } from "./routes/customers/deleteCustomerRouter";
import { errorHandler } from "./middlewares/errorHandler";
import { updateCustomerRouter } from "./routes/customers/updateCustomerRouter";
import { cardToCustomerRouter } from "./routes/customers/cardToCustomerRouter";
import { listCardsToCustomerRouter } from "./routes/customers/listCardsToCustomerRouter";
import { newChargeRouter } from "./routes/charges/newChargeRouter";
import { listChargesRouter } from "./routes/charges/listChargesRouter";
import { listDetailsChargRouter } from "./routes/charges/listDetailsChargeRouter";
import { changeStatusChargeRouter } from "./routes/charges/changeStatusChargeRouter";
import { changeStatusAntifraudeChargeRouter } from "./routes/charges/changeStatusAntifraudeChargeRouter";
import { captureChargePreAuthorizedRouter } from "./routes/charges/captureChargePreAuthorizedRouter";
import { reverseChargeAuthorizedRouter } from "./routes/charges/reverseChargeAuthorizedRouter";
import { newSessionRouter } from "./routes/sessions/newSessionRouter";
import { listDetailsSessionRouter } from "./routes/sessions/listDetailsSessionRouter";
import { changeStatusSessionRouter } from "./routes/sessions/changeStatusSessionRouter";
import { paymentSessionRouter } from "./routes/sessions/paymentSessionRouter";
import { cancelSessionRouter } from "./routes/sessions/cancelSessionRouter";
import { recoverHistorySessionRouter } from "./routes/sessions/recoverHistorySessionRouter";
import { recoverSessionCompanyDataRouter } from "./routes/sessions/recoverSessionCompanyDataRouter";

//cria o app:
export const app = express();

//configuração dos middlewares

app.use(express.json());
app.use(cors());
app.use(logger("dev"));

//Integra o endpoint na aplicação
//ao invés de chamar o controller direto, chamo a rota que vai chamar o controller...
//pra testar é sempre o endpoint do app + endpoint de router

app.use("/", publicKeyRouter);
app.use("/", tokenizationCardRouter);
app.use("/", saveTokenizedCardRouter);
app.use("/", listCardsRouter);
app.use("/", listCardDetailsRouter);
app.use("/", createNewCustomerRouter);
app.use("/", listCustomersCreatedRouter);
app.use("/", listDetailsCustomerCreatedRouter);
app.use("/", deleteCustomerRouter);
app.use("/", updateCustomerRouter);
app.use("/", cardToCustomerRouter);
app.use("/", listCardsToCustomerRouter);
app.use("/", newChargeRouter);
app.use("/", listChargesRouter);
app.use("/", listDetailsChargRouter);
app.use("/", changeStatusChargeRouter);
app.use("/", changeStatusAntifraudeChargeRouter);
app.use("/", captureChargePreAuthorizedRouter);
app.use("/", reverseChargeAuthorizedRouter);
app.use("/", newSessionRouter);
app.use("/", listDetailsSessionRouter);
app.use("/", changeStatusSessionRouter);
app.use("/", paymentSessionRouter);
app.use("/", cancelSessionRouter);
app.use("/", recoverHistorySessionRouter);
app.use("/", recoverSessionCompanyDataRouter);

//Configuração de middlewares de erros:
app.use(errorHandler);
