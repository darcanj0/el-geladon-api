import mongoose from "mongoose";
import Paletas from "../model/Paleta.js";

export const verifyIdPaletaMiddleware = async (req, res, next) => {
  const idParam = req.params.id;
  // const alreadyDeleted = await Paletas.findByIdAndDelete(idParam);
  // const idExists = await Paletas.exists({_id: idParam});
  // if (alreadyDeleted === null 
  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    return res.status(404).send({message:"A paleta não foi encontrada!"});
  }

  const paleta = await Paletas.findById(idParam);
  if (!paleta){
    return res.status(404).send({message:"A paleta não foi encontrada!"});
  }

  next();
};
