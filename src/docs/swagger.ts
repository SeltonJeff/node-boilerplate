import fs from "fs";
import { resolve } from "path";
import { Router } from "express";
import { serve, setup } from "swagger-ui-express";
import env from "../env";

type TSwaggerSecureDefinitions = {
  Bearer: { type: string; in: string; name: string };
};

type TSwaggerDocument = {
  swagger: string;
  basePath: string;
  info: { title: string; version: string };
  schemes: string[];
  consumes: string[];
  produces: string[];
  securityDefinitions: TSwaggerSecureDefinitions;
  paths: any;
  definitions: any;
};

class SwaggerDocs {
  public routes = Router();
  private paths = {};
  private readonly config: {};
  private readonly definitions = {};

  constructor() {
    this.config = {
      swagger: "2.0",
      basePath: env.APP_DOCS_URI,
      info: {
        title: env.APP_NAME,
        version: env.APP_VERSION,
      },
      schemes: ["http", "https"],
      consumes: ["application/json"],
      produces: ["application/json"],
      securityDefinitions: {
        Bearer: {
          type: "apiKey",
          in: "header",
          name: "Authorization",
        },
      },
    };
    this.definitions = {
      ErrorResponse: {
        type: "object",
        properties: {
          errors: {
            type: "array",
            items: {
              $ref: "#/definitions/ErrorData",
            },
          },
        },
      },
      ErrorData: {
        type: "object",
        properties: {
          code: {
            type: "integer",
            description: "Error code",
          },
          message: {
            type: "string",
            description: "Error message",
          },
        },
      },
    };
    this.createDocument().then((document) => {
      this.declareRoutes(document);
    });
  }

  private declareRoutes(document: TSwaggerDocument) {
    this.routes.get(env.APP_DOCS_URI, serve, setup(document));
  }

  private async createDocument(): Promise<any> {
    const dir = fs.readdirSync(resolve(__dirname, "..", "apps"));
    return dir.reduce(
      (total, path) => {
        try {
          const swagger = require(`../apps/${path}/swagger`);
          const aux = total;
          aux.paths = { ...total.paths, ...swagger.default.paths };
          if (swagger.default.definitions) {
            aux.definitions = {
              ...total.definitions,
              ...swagger.default.definitions,
            };
          }

          return total;
        } catch (error) {
          return total;
        }
      },
      {
        ...this.config,
        paths: { ...this.paths },
        definitions: { ...this.definitions },
      }
    );
  }
}

const Swagger = new SwaggerDocs();
export const SwaggerRoutes = Swagger.routes;
export default Swagger;
