import { Router } from 'express'
import { loginController } from '../controllers/login.controllers'
import DataIsValidMiddleware from '../middlewares/dataIsValid.middleware'
import { createLoginSchema } from '../schemas/login.schema'

const loginRoutes: Router = Router()

loginRoutes.post('', DataIsValidMiddleware(createLoginSchema), loginController)

export default loginRoutes