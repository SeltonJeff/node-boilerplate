import { config } from "dotenv";
config();

type TEnv = {
  APP_NAME: string;
  APP_VERSION: string;
  APP_PORT: string;
  APP_DOCS_URI: string;
};

const env: TEnv = {
  APP_NAME: process.env.APP_NAME || "",
  APP_VERSION: process.env.APP_VERSION || "",
  APP_PORT: process.env.APP_PORT || "3000",
  APP_DOCS_URI: process.env.APP_DOCS_URI || "",
};

export default env;
