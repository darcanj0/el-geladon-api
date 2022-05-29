import express from "express";
import cors from "cors";
import { router } from "./routes/paletas.router.js";
import { usersRouter } from "./routes/users.router.js";
import { loginRouter } from "./routes/login.routes.js";

const app = express();

app.use(express.json());
app.use(cors());
app.use("/paletas", router);
app.use("/users", usersRouter);
app.use("/login", loginRouter);

export default app;
