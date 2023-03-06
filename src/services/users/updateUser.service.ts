 import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { User } from "../../entities/users.entity"
import { AppError } from "../../errors"
import { IUserUpdate, IUserReturn } from "../../interfaces/user.interface"
import { returnUserSchema } from "../../schemas/user.schema"

const updateUserService = async (newData: IUserUpdate[], idUser: number): Promise<IUserReturn> => {
    const userRepository: Repository<User> = AppDataSource.getRepository(User)
    const oldUserData = await userRepository.findOneBy({
        id: idUser
    })

    const user = userRepository.create({
        ...oldUserData,
        ...newData
    })

    await userRepository.save(user)
    const updatedUser = returnUserSchema.parse(user)
    return updatedUser

}

export default updateUserService 