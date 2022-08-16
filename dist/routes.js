"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const routes_1 = __importDefault(require("./apps/Auth/routes"));
class RootRoutes {
    constructor() {
        this.routes = (0, express_1.Router)();
        this.declareOtherRoutes();
        this.declareRoutes();
    }
    declareOtherRoutes() {
        this.routes.get("/", (_, res) => {
            res.status(200).json({ message: "Welcome!!!" });
        });
    }
    declareRoutes() {
        this.routes.use("/auth", routes_1.default);
    }
}
exports.default = new RootRoutes().routes;
