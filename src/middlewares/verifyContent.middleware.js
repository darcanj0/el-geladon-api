export const verifyContentPaletaMiddleware = (req, res, next) => {
  const { sabor, descricao, foto, preco } = req.body;

  if (!sabor || !descricao || !foto || !preco) {
    return res.status(422).send("Preencha todos os campos da paleta!");
  }

  next();
};
