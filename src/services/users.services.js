import Users from "../model/User.js";

class UsersServices {
  async findUsers() {
    const users = await Users.find();
    if (users.length == 0) {
      throw { status: 404, message: "Nenhum usuário encontrado" };
    }
    return users;
  }

  async findUserById({ id }) {
    const selectedUser = await Users.findById(id);
    return selectedUser;
  }

  async createUser({ email, name, password, admin }) {
    const newUser = {
      email,
      name,
      password,
      admin,
    };
    try {
      const createdUser = await Users.create(newUser);
      return createdUser;
    } catch (error) {
      throw error;
    }
  }

  async updateUser({ id, email, name, password, admin }) {
    const userModification = {
      email,
      name,
      password,
      admin,
    };
    try {
      await Users.updateOne({ _id: id }, userModification);
      const updatedUser = await Users.findById(id);
      return updatedUser;
    } catch (error) {
      throw error;
    }
  }

  async deleteUser({ id }) {
    return await Users.findByIdAndDelete(id);
  }
}

export default UsersServices;

// {
//   "_id": {
//     "$oid": "629384e1f71a7e994d914553"
//   },
//   "email": "daniel.thomas.arcanjo@gmail.com",
//   "name": "Daniel Arcanjo",
//   "password": "123456",
//   "admin": true
// }
