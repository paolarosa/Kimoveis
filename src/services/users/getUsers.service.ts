import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/users.entity";
import { IAllUsersReturn } from "../../interfaces/user.interface";
import { returnAllUsersSchema } from "../../schemas/user.schema";



const listUsersService = async () => {

  const userRepository: Repository<User> = AppDataSource.getRepository(User)

  const findUsers: Array<User> = await userRepository.find({
    withDeleted: true
  })
 const users = returnAllUsersSchema.parse(findUsers) 

  return users
}

export { listUsersService } 