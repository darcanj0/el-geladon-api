//funcoes de callback chamadas nas rotas
//acessam o request e retornam o response
import PaletasServices from "../services/paletas.services.js";

const paletasServices = new PaletasServices();

export const findPaletasController = async (req, res) => {
  try {
    const allPaletas = await paletasServices.findPaletas();
    res.send(allPaletas);
  } catch (error) {
    res.status(error.status).send({ message: error.message });
  }
};

export const findPaletaByIdController = async (req, res) => {
  const id = req.params.id;
  const selectedPaleta = await paletasServices.findPaletaById({ id });
  res.send(selectedPaleta);
};

export const createPaletaController = async (req, res) => {
  const { sabor, descricao, foto, preco } = req.body;
  try {
    const newPaleta = await paletasServices.createPaleta({
      sabor,
      descricao,
      foto,
      preco,
    });
    res.status(201).send(newPaleta);
  } catch (error) {
    if (error.code === 11000) {
      console.log(error.keyValue.sabor);
      res
        .status(400)
        .send({
          message: `Já existe uma paleta com o sabor: ${error.keyValue.sabor}`,
        });
    }
  }
};

export const updatePaletaController = async (req, res) => {
  const id = req.params.id;
  const { sabor, descricao, foto, preco } = req.body;
  try {
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
  } catch (error) {
    if (error.code === 11000){
      res.status(400).send({message:`Já existe uma paleta com o sabor: ${error.keyValue.sabor}`});
    }
  }
};

export const deletePaletaController = async (req, res) => {
  const id = req.params.id;
  const deletedPaleta = await paletasServices.deletePaleta({ id });
  res.sendStatus(204);
};
