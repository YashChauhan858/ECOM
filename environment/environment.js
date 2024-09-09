import dotenv from "dotenv";

dotenv.config();
export const environment = {
  port: process.env.PORT || 3000,
  env: process.env.NODE_ENV || "development",
  jwtSecret: process?.env?.JWT_SECRET,
};
