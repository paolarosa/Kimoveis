import { Router } from 'express'
import { createUserController, deleteUserController, listUsersController, updateUserController } from '../controllers/users.controllers'
import { ensureAdminIsValid } from '../middlewares/adminIsValidMiddleware'
import DataIsValidMiddleware from '../middlewares/dataIsValid.middleware'
import emailExistsMiddleware from '../middlewares/emailAlreadyExists.middleware'
import { ensureUserExistsMiddleware } from '../middlewares/ensureUserExists.middleware'
import { tokenIsValidMiddleware } from '../middlewares/tokenIsValid.middleware'
import { userCantUpdateMiddleware } from '../middlewares/userCantUpdateMiddleware'
import { userSchema, userUpdateSchema } from '../schemas/user.schema'

const usersRoutes: Router = Router()

usersRoutes.post('', DataIsValidMiddleware(userSchema),emailExistsMiddleware, createUserController)
usersRoutes.get('', tokenIsValidMiddleware, ensureAdminIsValid, listUsersController)
usersRoutes.patch('/:id',tokenIsValidMiddleware, ensureUserExistsMiddleware, userCantUpdateMiddleware , DataIsValidMiddleware(userUpdateSchema),emailExistsMiddleware, updateUserController)
usersRoutes.delete('/:id',tokenIsValidMiddleware,ensureUserExistsMiddleware, ensureAdminIsValid,  deleteUserController)

export default usersRoutes