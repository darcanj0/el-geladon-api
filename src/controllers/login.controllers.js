import LoginServices from "../services/login.services.js";

const loginServices = new LoginServices();

class LoginControllers {
  async signIn(req, res) {
    const { email, password } = req.body;
    try {
        const login = await loginServices.signIn({email, password});
        res.send({token: login.token});
    } catch (error) {
        res.status(error.status).send(error.message);
    }
  }
}

export default LoginControllers;
