import type { Config } from "prismic-ts-codegen";
import dotenv from "dotenv";

dotenv.config({ path: ".env" });

const customTypesAPIToken = process.env.PRISMIC_CUSTOM_TYPES_TOKEN;
const config: Config = {
  repositoryName: "prismic-react-tghuy",
  output: "./src/types/generated.ts",
  customTypesAPIToken,
  models: {
    fetchFromRepository: true,
  },
};

export default config;
