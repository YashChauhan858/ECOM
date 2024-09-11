import { Request, Response } from "express";
import RedisConnection from "../caching/redis.js";

export const getUsersViaId = async (req: Request, res: Response) => {
  const userId = req?.params["id"];
  if (!userId) {
    return res.status(404).send("User id is required");
  }
  const cachedData = req?.cachedData ?? null;

  if (cachedData) return res.send("User id is " + cachedData);

  // simulate delay
  await new Promise((resolve) => setTimeout(resolve, 3000));

  if (!cachedData) await RedisConnection.storeData(req.originalUrl, userId, 60);

  return res.send(`User id is ${userId}`);
};

export const addUser = (req: Request, res: Response) => {
  const user = req?.body;
  if (!user) {
    return res.status(404).send("User details are required");
  }

  return res.send(`User details are ${JSON.stringify(user)}`);
};

export const updateUser = (req: Request, res: Response) => {
  const userId = req?.params["id"];
  const user = req?.body;
  if (!userId || !user) {
    return res.status(404).send("User id and details are required");
  }

  return res.send(
    `User id is ${userId} and details are ${JSON.stringify(user)}`
  );
};
