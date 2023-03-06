import { Request, Response, NextFunction } from 'express'
import { AppError } from '../errors'
import 'dotenv/config'
import { IKeys } from '../interfaces/estate.interface'


const validateExtraKey = async (req: Request, res: Response, next: NextFunction): Promise<Response | void > => {
    const keys: Array<string> = Object.keys(req.body)
    const requiredKeys: Array<IKeys> = ['value', 'size', 'address', 'categoryId']
    const containsAllRequired: boolean = keys.every((key: any) => { return requiredKeys.includes(key) })
    if (!containsAllRequired) {
      keys.map((el: any) => {
        el !== "value" && el !== "size" && el !== "address" && el !== "categoryId" && delete req.body[`${el}`]
      })
    }
    return next()
}

export { validateExtraKey }