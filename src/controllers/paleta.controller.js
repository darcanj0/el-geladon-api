//funcoes de callback chamadas nas rotas
//acessam o request e retornam o response
import PaletasServices from "../services/paleta.service";

const paletasServices = new PaletasServices();

export const findPaletasController = (req, res) => {
  try {
    const allPaletas = paletasServices.findPaletas();
    res.send(allPaletas);
  } catch (error) {
    res.status(error.status).send(error.message);
  }
};

export const findPaletaByIdController = (req, res) => {
  const id = +req.params.id;
  const chosenPaleta = paletasServices.findPaletaById({ id });
  res.send(chosenPaleta);
};

export const createPaletaController = (req, res) => {
  const { sabor, descricao, foto, preco } = req.body;
  const newPaleta = paletasServices.createPaleta({
    sabor,
    descricao,
    foto,
    preco,
  });
  res.status(201).send(newPaleta);
};

export const updatePaletaController = (req, res) => {
  const id = +req.params.id;
  const { sabor, descricao, foto, preco } = req.body;
  const updatedPaleta = paletasServices.updatePaleta({
    sabor,
    descricao,
    foto,
    preco,
    id,
  });
  res.status(200).send(updatedPaleta);
};

export const deletePaletaController = (req, res) => {
  const id = +req.params.id;
  paletasServices.deletePaleta({ id });
  res.status(204).send({ message: "Paleta deletada com sucesso!" });
};
