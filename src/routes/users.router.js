import express from "express";
import UsersControllers from "../controllers/users.controllers.js";
import { verifyIdUserMiddleware } from "../middlewares/verifyIdUser.middleware.js";
import { verifyContentUserMiddleware } from "../middlewares/verifyContentUser.middleware.js";
import {verifyTokenMiddleware} from "../middlewares/verifyToken.middleware.js";

export const usersRouter = express.Router();
const usersControllers = new UsersControllers();

usersRouter.get("/find-users", usersControllers.findUsers);

usersRouter.get(
  "/find-user/:id",
  verifyIdUserMiddleware,
  usersControllers.findUserById
);

usersRouter.post(
  "/create-user",
  verifyContentUserMiddleware,
  usersControllers.createUser
);

usersRouter.put(
  "/update-user/:id",
  verifyIdUserMiddleware,
  verifyContentUserMiddleware,
  usersControllers.updateUser
);

usersRouter.delete(
  "/delete-user/:id",
  verifyIdUserMiddleware,
  usersControllers.deleteUser
);
