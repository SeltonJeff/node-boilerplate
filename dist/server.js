"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const env_1 = __importDefault(require("./env"));
const app_1 = __importDefault(require("./app"));
class Server {
    constructor() {
        this.app = app_1.default;
        this.startServer();
    }
    startServer() {
        this.app.listen(env_1.default.APP_PORT, () => console.log("App running at: ", `http://localhost:${env_1.default.APP_PORT}`));
    }
}
new Server();
