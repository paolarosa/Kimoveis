import { AppDataSource } from '../../data-source'
import { Repository } from 'typeorm'
import { IUser, IUserReturn } from '../../interfaces/user.interface'
import { returnUserSchema } from '../../schemas/user.schema'
import { User } from '../../entities/users.entity'

const createUserService = async (data: IUser): Promise<IUserReturn> => {
    const userRepository: Repository<User> = AppDataSource.getRepository(User)
    const user: User = userRepository.create(data)
    await userRepository.save(user)
    const newUser = returnUserSchema.parse(user)
    
    return newUser

}

export default createUserService