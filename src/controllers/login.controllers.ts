import {Request, Response} from 'express'
import { ILogin } from '../interfaces/login.interface'
import { loginService } from '../services/login/login.service'

const loginController = async (req: Request, res: Response): Promise<Response> =>{
const data: ILogin = req.body
const token = await loginService(data)
return res.json({token:token})
}

export {
    loginController
}