import { Router } from "express";
import AuthRoutes from "./apps/Auth/routes";

class RootRoutes {
  public routes = Router();

  constructor() {
    this.declareOtherRoutes();
    this.declareRoutes();
  }

  private declareOtherRoutes() {
    this.routes.get("/", (_, res) => {
      res.status(200).json({ message: "Welcome!!!" });
    });
  }
  private declareRoutes() {
    this.routes.use("/auth", AuthRoutes);
  }
}

export default new RootRoutes().routes;
