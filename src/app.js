import express from "express";
import cors from "cors";
import { router } from "./routes/paletas.router.js";
// import { cartRoute } from "./routes/cart.route.js";
import { usersRouter } from "./routes/users.router.js";

const app = express();

app.use(express.json());
app.use(cors());
app.use("/paletas", router);
// app.use("/cart", cartRoute);
app.use("/users", usersRouter);

export default app;
