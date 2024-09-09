import { isValidEmail } from "../validations/validations.js";

export const login = (req, res) => {
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

  res.send(`User details are ${JSON.stringify(user)}`);
};

export const registerUser = (req, res) => {
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

  res.send(`Created User ${JSON.stringify(user)}`);
};
