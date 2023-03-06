import { Request, Response, NextFunction } from 'express'
import { AppError } from '../errors'
import 'dotenv/config'

const ensureAdminIsValid = async (req: Request, res: Response, next: NextFunction): Promise<void> => {

    const userAuthenticated = req.user
    if (userAuthenticated.admin === false) {
        throw new AppError('Insufficient permission', 403)
    }
    return next()
}

export { ensureAdminIsValid }