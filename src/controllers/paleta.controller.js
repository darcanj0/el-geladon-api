//funcoes de callback chamadas nas rotas
//acessam o request e retornam o response
import PaletasServices from "../services/paleta.service.js";

const paletasServices = new PaletasServices();

export const findPaletasController = async (req, res) => {
  try {
    const allPaletas = await paletasServices.findPaletas();
    res.send(allPaletas);
  } catch (error) {
    res.status(error.status).send({message: error.message});
  }
};

export const findPaletaByIdController = async (req, res) => {
  const id = req.params.id;
  const chosenPaleta = await paletasServices.findPaletaById({ id });
  res.send(chosenPaleta);
};

export const createPaletaController = async (req, res) => {
  const { sabor, descricao, foto, preco } = req.body;
  const newPaleta = await paletasServices.createPaleta({
    sabor,
    descricao,
    foto,
    preco,
  });
  res.status(201).send(newPaleta);
};

export const updatePaletaController = async (req, res) => {
  const id = req.params.id;
  const { sabor, descricao, foto, preco } = req.body;
  const updatedPaleta = await paletasServices.updatePaleta(
    {
      sabor,
      descricao,
      foto,
      preco,
    },
    id
  );
  res.status(200).send(updatedPaleta);
};

export const deletePaletaController = async (req, res) => {
  const id = req.params.id;
  const deletedPaleta = await paletasServices.deletePaleta({ id });
  res.status(200).send(deletedPaleta);
};
