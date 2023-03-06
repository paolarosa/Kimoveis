import { Request, Response, NextFunction } from 'express'
import { Repository } from 'typeorm'
import { AppDataSource } from '../data-source'
import { User } from '../entities/users.entity'
import { AppError } from '../errors'

const emailExistsMiddleware = async(req: Request, res: Response, next: NextFunction):Promise<void> => {

    const userRepository:Repository<User> = AppDataSource.getRepository(User)
   
    const findUser = await userRepository.findOne({
        where:{
            email: req.body.email
        }
    })
    if(!Object.keys(req.body).includes("email")){
        return next()
    }
    if(findUser){
        throw new AppError('Email already exists', 409)
    }

    return next()

}

export default emailExistsMiddleware