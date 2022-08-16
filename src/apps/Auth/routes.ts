import { Router } from "express";

class AuthRoutes {
  public AuthRoutes = Router();

  constructor() {
    this.declareAuthRoutes();
  }

  private declareAuthRoutes() {
    this.AuthRoutes.get("/", (_, res) => {
      res.status(200).json({ message: "Tudo certo!" });
    });
  }
}

export default new AuthRoutes().AuthRoutes;
