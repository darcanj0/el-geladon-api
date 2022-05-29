import jwt from "jsonwebtoken";
export const verifyTokenMiddleware = (req, res, next) => {
  //verify whether the token was sent
  const token = req.headers.authorization;
  if (token === undefined) {
    return res.status(401).send({ message: "Token não enviado" });
  }
  //verify whether the token is valid
  jwt.verify(token, "secret", (error, decode) => {
    if (error) {
      return res.status(401).send({ message: "Token inválido!" });
    }

    next();
  });
};
