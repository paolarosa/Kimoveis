import jwt from 'jsonwebtoken'
import { compare } from 'bcryptjs'
import { AppDataSource } from '../../data-source'
import { User } from '../../entities/users.entity'
import { AppError } from '../../errors'
import { ILogin } from '../../interfaces/login.interface'
import 'dotenv/config'
import { Repository } from 'typeorm'

const loginService = async (data: ILogin): Promise<string> => {
    const userRepository: Repository<User> = AppDataSource.getRepository(User)
    const user: User | null = await userRepository.findOneBy({
        email: data.email
    })
    console.log(3,user)
    
    if (!user) {
        throw new AppError('Invalid credentials', 401)
    }
    const ensurePassword = await compare(data.password, user.password)
    if (!ensurePassword) {
        throw new AppError('Invalid credentials', 401)
    }

    const token: string = jwt.sign(
        { admin: user.admin },
        process.env.SECRET_KEY!,
        {
            expiresIn: '24h',
            subject: String(user.id)
        }
        
    )
    
    return token
}

export { loginService }