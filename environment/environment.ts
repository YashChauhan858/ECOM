import dotenv from "dotenv";
import { IEnvironment } from "../types";

dotenv.config();

export const environment: IEnvironment = {
  port: process.env["PORT"] || 3000,
  env: process.env["NODE_ENV"] || "development",
  jwtSecret: process?.env["JWT_SECRET"],
};
