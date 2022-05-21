//regras de negocio
//modela e interage com o banco de dados
import paletas from "../database";
class PaletasServices {
  findPaletas() {
    if (paletas.length == 0) {
      throw { status: 404, message: "Nenhuma paleta encontrada" };
    }
    return paletas;
  }

  findPaletaById({ id }) {
    const selectedPaleta = paletas.find((paleta) => paleta.id === id);
    console.log(selectedPaleta);
    return selectedPaleta;
  }

  createPaleta({ sabor, descricao, foto, preco }) {
    let newId = paletas.length === 0 ? 1 : paletas[paletas.length - 1].id + 1;
    const newPaleta = {
      //sempre pegar o id do ultimo elemento e somar 1
      id: newId,
      sabor,
      descricao,
      foto,
      preco,
    };
    paletas.push(newPaleta);
    return newPaleta;
  }

  updatePaleta({ sabor, descricao, foto, preco, id }) {
    const paletaEdited = {
      id,
      sabor,
      descricao,
      foto,
      preco,
    };
    const paletaIndex = paletas.findIndex((paleta) => paleta.id === id);
    paletas[paletaIndex] = paletaEdited;
    return paletaEdited;
  }

  deletePaleta({ id }) {
    const paletaIndex = paletas.findIndex((paleta) => paleta.id === id);
    paletas.splice(paletaIndex, 1);
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
