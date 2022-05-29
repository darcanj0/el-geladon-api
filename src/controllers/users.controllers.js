import UsersServices from "../services/users.services.js";
const usersControllers = new UsersControllers();

class UsersControllers {
  async findUsers(req, res) {
    try {
        const users = await usersControllers.findUsers();
        res.status(200).send(users);
    } catch (error) {
      res.status(error.status).send({ message: error.message });
    }
  }
}

export default UsersControllers;
