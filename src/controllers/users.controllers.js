import UsersServices from "../services/users.services.js";

const usersServices = new UsersServices();

class UsersControllers {
  async findUsers(req, res) {
    try {
      const users = await usersServices.findUsers();
      res.send(users);
    } catch (error) {
      res.status(error.status).send({ message: error.message });
    }
  }

  async findUserById(req, res) {
    const id = req.params.id;
    const selectedUser = await usersServices.findUserById({ id });
    res.send(selectedUser);
  }

  async createUser(req, res) {
    const { email, name, password, admin } = req.body;
    try {
      const createdUser = await usersServices.createUser({
        email,
        name,
        password,
        admin,
      });
      res.status(201).send(createdUser);
    } catch (error) {
      if (error.code === 11000) {
        res.status(400).send({
          message: `Esse email já está cadastrado: ${error.keyValue.email}`,
        });
      }
    }
  }

  async updateUser(req, res) {
    const id = req.params.id;
    const { email, name, password, admin } = req.body;

    try {
      const updatedUser = await usersServices.updateUser({
        id,
        email,
        name,
        password,
        admin,
      });
      res.send(updatedUser);
    } catch (error) {
      if (error.code === 11000) {
        res
          .status(400)
          .send({
            message: `O email ${error.keyValue.email} já possui cadastro`,
          });
      }
    }
  }

  async deleteUser(req, res) {
    const id = req.params.id;
    const deletedUser = await usersServices.deleteUser({id});
    res.sendStatus(204);
  }
}

export default UsersControllers;
