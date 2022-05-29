export const verifyContentUserMiddleware = (req, res, next) => {
  const { email, name, password } = req.body;

  if (!email || !name || !password) {
    return res
      .status(422)
      .send({ message: "Preencha todos os campos do usuário!" });
  }

  next();
};
