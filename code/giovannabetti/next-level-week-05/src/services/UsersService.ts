import { getCustomRepository } from "typeorm";
import { UsersRepository } from "../repositories/UsersRepository";

class UsersService {
  private usersRepository = getCustomRepository(UsersRepository);

  async create(email: string) {
    // Verificar se user existe

    const userExists = await this.usersRepository.findOne({
      email,
    });

    // Se existir, retornar user
    if (userExists) {
      return userExists;
    }

    const user = this.usersRepository.create({
      email,
    });

    await this.usersRepository.save(user);

    // Se não existir, salvar no DB
    return user;
  }
}

export { UsersService };