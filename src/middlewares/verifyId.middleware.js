import paletas from "../database/index.js";
export const verifyIdPaletaMiddleware = (req, res, next) => {
  const id = +req.params.id;

  const selectedPaleta = paletas.find((paleta) => paleta.id === id);

  if (!selectedPaleta) {
    return res.status(404).send({message:"A paleta não foi encontrada!"});
  }

  next();
};
