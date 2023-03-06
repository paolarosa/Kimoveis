import { Request, Response, NextFunction } from 'express'
import { AppError } from '../errors'
import 'dotenv/config'

const userCantUpdateMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const userAuthenticated = req.user
    if (userAuthenticated.admin === false && req.user.id !== +req.params.id) {
        throw new AppError('Insufficient permission', 403)
    }
     if(userAuthenticated.admin === false && req.body.admin !== req.user.admin){
        req.body.admin = req.user.admin
    }  



    return next()
}

export { userCantUpdateMiddleware }