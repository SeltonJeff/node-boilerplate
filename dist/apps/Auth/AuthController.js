"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AuthController {
    async login(_, res) {
        res
            .status(200)
            .json({ statusCode: 200, message: "You are authenticated!" });
    }
}
exports.default = new AuthController();
