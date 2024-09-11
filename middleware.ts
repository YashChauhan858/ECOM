import { Express, NextFunction, Request, Response } from "express";

import RedisConnection from "./caching/redis.js";
import { environment } from "./environment/environment";
import jwt from "jsonwebtoken";

export const invalidEndPoint = (app: Express) => {
  // catch 404 and forward to error handler
  app.get("*", (request: Request, response: Response, next: NextFunction) => {
    response.status(404).send("No Endpoint Exist");
    next();
  });
};

export const authCheck = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers["authorization"];

  if (!environment.jwtSecret)
    return res.status(500).json({ message: "JWT Secret not found" });

  if (!token) {
    return res.status(401).json({ message: "Not Authorized" });
  }

  jwt.verify(
    token,
    environment.jwtSecret,
    (
      err: jwt.VerifyErrors | null,
      user: string | jwt.JwtPayload | undefined
    ) => {
      if (err) return res.status(403).json({ message: "Invalid token." });
      req.user = user;
      next();
      return;
    }
  );
};

export const cacheData = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const cache = await RedisConnection.fetchFromCache(req.originalUrl);
    req.cachedData = cache ?? null;
    next();
  } catch (error) {
    req.cachedData = null;
    next();
  }
};
