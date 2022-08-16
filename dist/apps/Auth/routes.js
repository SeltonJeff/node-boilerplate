"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class AuthRoutes {
    constructor() {
        this.AuthRoutes = (0, express_1.Router)();
        this.declareAuthRoutes();
    }
    declareAuthRoutes() {
        this.AuthRoutes.get("/", (_, res) => {
            res.status(200).json({ message: "Tudo certo!" });
        });
    }
}
exports.default = new AuthRoutes().AuthRoutes;
