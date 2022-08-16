import express, { static as AppStatic } from "express";
import cors from "cors";
import * as bodyParser from "body-parser";
import routes from "./routes";
import { SwaggerRoutes } from "./docs/swagger";

class App {
  public express: express.Application;

  public constructor() {
    this.express = express();
    this.middlewares();
  }

  private middlewares(): void {
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({ extended: false }));
    this.express.use(cors());
    this.express.use(SwaggerRoutes);
    this.express.use(routes);
    this.express.use("/", AppStatic("public"));
  }
}

export default new App().express;
