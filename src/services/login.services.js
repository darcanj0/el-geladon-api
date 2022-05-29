import Users from "../model/User.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

class LoginServices {
  async signIn({ email, password }) {
    const user = await Users.findOne({ email });

    if (!user) {
      throw { status: 404, message: "Usuário não encontrado!" };
    }

    const correctPassword = await bcryptjs.compare(password, user.password);

    if (!correctPassword) {
      throw { status: 400, message: "Senha incorreta!" };
    }

    //gerar um token se tudo der certo
    const token = jwt.sign({ email: email }, "secret", { expiresIn: "24h" });

    return { status: 200, token: token };
  }
}

export default LoginServices;
