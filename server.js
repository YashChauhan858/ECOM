import { environment } from "./environment/environment.js";
import cors from "cors";

import { invalidEndPoint } from "./middleware.js";

import userRoute from "./routes/userRoute.js";
import loginRoute from "./routes/loginRoute.js";
import productRoute from "./routes/productRoute.js";

import express from "express";
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", loginRoute);
app.use("/api/user", userRoute);
app.use("/api/product", productRoute);

// Middlewares
invalidEndPoint(app);

app.listen(environment.port, () => {
  console.log("server is running");
});
