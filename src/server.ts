import { Request, Response, NextFunction } from "express";
import { app } from "./app";

//ou seria aqui? (middleware de erro)

const port = process.env.PORT || 3000;

const server = app.listen(port, () =>
  console.log(`App ouvindo na porta ${port}`)
);

process.on("SIGINT", () => {
  server.close();
  console.log("App finalizado");
});
