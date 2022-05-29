import Users from "../model/User.js";

class UsersServices {
  async findUsers() {
    const users = await Users.find();
    if (users.length == 0){
        throw {status: 404, message: "Nenhum usuário encontrado"};
    }
    return users;
  }

  
}

export default UsersServices;
