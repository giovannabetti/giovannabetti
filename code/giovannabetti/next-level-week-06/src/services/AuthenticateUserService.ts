import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";
import { compare} from "bcryptjs";
import { sign } from "jsonwebtoken";

interface IAuthenticateRequest {
  email: string;
  password: string;
}

class AuthenticateUserService {
  async execute({email, password}: IAuthenticateRequest) {
    const usersRepositories = getCustomRepository(UsersRepositories);

    // Verificar se email existe
    const user = await usersRepositories.findOne({ email });

    if(!user) {
      throw new Error("Email/Password incorrect")
    }

    // Verificar se senha está correta
    // verifico que compare retorna uma promise, entao passo o await
    const passwordMatch = await compare(password, user.password);

    if(!passwordMatch) {
      throw new Error("Email/Password incorrect")
    }

    // Gerar token - md5hashgenerator.com
    const token = sign(
      {
        email: user.email,
      }, "4f93ac9d10cb751b8c9c646bc9dbccb9",
      {
        subject: user.id,
        expiresIn: "1d",
      }
    );
// parei em 40min na aula 04
    return token;
  }
}

export { AuthenticateUserService };
