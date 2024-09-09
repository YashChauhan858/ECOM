export const getUsersViaId = (req, res) => {
  const userId = req?.params?.id;
  if (!userId) {
    return res.status(404).send("User id is required");
  }
  res.send(`User id is ${userId}`);
};

export const addUser = (req, res) => {
  const user = req?.body;
  if (!user) {
    return res.status(404).send("User details are required");
  }

  res.send(`User details are ${JSON.stringify(user)}`);
};

export const updateUser = (req, res) => {
  const userId = req?.params?.id;
  const user = req?.body;
  if (!userId || !user) {
    return res.status(404).send("User id and details are required");
  }

  res.send(`User id is ${userId} and details are ${JSON.stringify(user)}`);
};
