import mongoose from "mongoose";
import Users from "../model/User.js";

export const verifyIdUserMiddleware = async (req, res, next) => {
  const idParam = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    return res.status(404).send({ message: "Id de usuário inválido!" });
  }

  const user = await Users.findById(idParam);
  if (!user) {
    return res.status(404).send({ message: "Usuário não encontrado!" });
  }

  next();
};
