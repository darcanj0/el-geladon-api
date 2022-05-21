import express from "express";
import { verifyIdPaletaMiddleware } from "../middlewares/verifyId.middleware.js";
import { verifyContentPaletaMiddleware } from "../middlewares/verifyContent.middleware.js";
import {
  findPaletasController,
  findPaletaByIdController,
  createPaletaController,
  updatePaletaController,
  deletePaletaController,
} from "../controllers/paleta.controller.js";

export const router = express.Router();

router.get("/find-paletas", findPaletasController);
router.get(
  "/find-paleta/:id",
  verifyIdPaletaMiddleware,
  findPaletaByIdController
);

router.post("/create", verifyContentPaletaMiddleware, createPaletaController);
router.put(
  "/update/:id",
  verifyIdPaletaMiddleware,
  verifyContentPaletaMiddleware,
  updatePaletaController
);
router.delete("/delete/:id", verifyIdPaletaMiddleware, deletePaletaController);