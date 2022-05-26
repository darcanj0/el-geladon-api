//regras de negocio
//modela e interage com o banco de dados

import Paletas from "../model/Paleta.js";

class PaletasServices {
  async findPaletas() {
    const paletas = await Paletas.find();
    if (paletas.length == 0) {
      throw { status: 404, message: "Nenhuma paleta encontrada" };
    }
    return paletas;
  }

  async findPaletaById({ id }) {
    const selectedPaleta = await Paletas.findById(id);
    console.log(selectedPaleta);
    return selectedPaleta;
  }

  async createPaleta({ sabor, descricao, foto, preco }) {
    const newPaleta = await Paletas.create({
      sabor,
      descricao,
      foto,
      preco,
    });
    return newPaleta;
  }

  async updatePaleta({ sabor, descricao, foto, preco }, id) {
    const paletaModification = {
      sabor,
      descricao,
      foto,
      preco,
    };
    await Paletas.findByIdAndUpdate(id, paletaModification);
    const updatedPaleta = await Paletas.findById(id);

    return updatedPaleta;
  }

  async deletePaleta({ id }) {
    return await Paletas.findByIdAndDelete(id);
  }
}

export default PaletasServices;

// {
//   id: 1,
//   sabor: "Açaí com Leite Condensado",
//   descricao:
//     "Quam vulputate dignissim suspendisse in est ante in nibh mauris.",
//   foto: "./assets/images/acai-com-leite-condensado.png",
//   preco: 10.0,
// }
