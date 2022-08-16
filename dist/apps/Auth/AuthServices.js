"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AuthServices {
    login(payload) {
        console.log(payload);
        return Promise.resolve(true);
    }
}
exports.default = new AuthServices();
