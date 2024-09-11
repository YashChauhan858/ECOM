import dotenv from "dotenv";

dotenv.config();
interface IEnvironment {
  port: number | string;
  env: string;
  jwtSecret?: string;
}

export const environment: IEnvironment = {
  port: process.env["PORT"] || 3000,
  env: process.env["NODE_ENV"] || "development",
  jwtSecret: process?.env["JWT_SECRET"],
};
