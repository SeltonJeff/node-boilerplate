"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const env = {
    APP_NAME: process.env.APP_NAME || "",
    APP_VERSION: process.env.APP_VERSION || "",
    APP_PORT: process.env.APP_PORT || "3000",
    APP_DOCS_URI: process.env.APP_DOCS_URI || "",
};
exports.default = env;
