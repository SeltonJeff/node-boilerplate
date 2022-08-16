"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SwaggerRoutes = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = require("path");
const express_1 = require("express");
const swagger_ui_express_1 = require("swagger-ui-express");
const env_1 = __importDefault(require("../env"));
class SwaggerDocs {
    constructor() {
        this.routes = (0, express_1.Router)();
        this.paths = {};
        this.definitions = {};
        this.config = {
            swagger: "2.0",
            basePath: env_1.default.APP_DOCS_URI,
            info: {
                title: env_1.default.APP_NAME,
                version: env_1.default.APP_VERSION,
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
    declareRoutes(document) {
        this.routes.get(env_1.default.APP_DOCS_URI, swagger_ui_express_1.serve, (0, swagger_ui_express_1.setup)(document));
    }
    async createDocument() {
        const dir = fs_1.default.readdirSync((0, path_1.resolve)(__dirname, "..", "apps"));
        return dir.reduce((total, path) => {
            try {
                const swagger = require(`../apps/${path}/swagger`);
                const aux = total;
                aux.paths = Object.assign(Object.assign({}, total.paths), swagger.default.paths);
                if (swagger.default.definitions) {
                    aux.definitions = Object.assign(Object.assign({}, total.definitions), swagger.default.definitions);
                }
                return total;
            }
            catch (error) {
                return total;
            }
        }, Object.assign(Object.assign({}, this.config), { paths: Object.assign({}, this.paths), definitions: Object.assign({}, this.definitions) }));
    }
}
const Swagger = new SwaggerDocs();
exports.SwaggerRoutes = Swagger.routes;
exports.default = Swagger;
