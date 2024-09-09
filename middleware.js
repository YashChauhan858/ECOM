import { fetchFromCache } from "./caching/redis.js";
import { environment } from "./environment/environment.js";
import jwt from "jsonwebtoken";

export const invalidEndPoint = (app) => {
  // catch 404 and forward to error handler
  app.use((request, response, next) => {
    response.status(404).send("No Endpoint Exist");
    next();
  });
};

export const authCheck = (req, res, next) => {
  const token = req.headers["authorization"];

  if (!token) {
    return res.status(401).json({ message: "Not Authorized" });
  }

  jwt.verify(token, environment.jwtSecret, (err, user) => {
    if (err) return res.status(403).json({ message: "Invalid token." });
    req.user = user;
    next();
  });
};

export const cacheData = async (req, res, next) => {
  try {
    const cache = await fetchFromCache(req.originalUrl);
    req.cachedData = cache ?? null;
    next();
  } catch (error) {
    req.cachedData = null;
    next();
  }
};
