import { Request, Response } from "express";
import { environment } from "../environment/environment.js";
import { isValidEmail } from "../validations/validations.js";
import jwt from "jsonwebtoken";

export const login = (req: Request, res: Response) => {
  const user = req?.body;
  if (!user) {
    return res.status(404).send("User details are required");
  }
  if (!user.email || !user.password) {
    return res.status(404).send("Email and password are required");
  }
  if (!isValidEmail(user?.email)) {
    return res.status(404).send("Email is invalid");
  }

  if (!environment?.jwtSecret)
    return res.status(500).json({ message: "JWT Secret not found" });

  const token = jwt.sign({ username: user.email }, environment?.jwtSecret, {
    expiresIn: "1h",
  });

  return res.status(200).json({ token });
};

export const registerUser = (req: Request, res: Response) => {
  const user = req?.body;
  if (!user) {
    return res.status(404).send("User details are required");
  }
  if (!user.email || !user.password) {
    return res.status(404).send("Email and password are required");
  }
  if (!isValidEmail(user?.email)) {
    return res.status(404).send("Email is invalid");
  }

  return res.send(`Created User ${JSON.stringify(user)}`);
};
