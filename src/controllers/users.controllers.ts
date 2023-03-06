import {Request, Response} from 'express'
import { IUser, IUserUpdate } from '../interfaces/user.interface'
import createUserService from '../services/users/createUser.service'
import { deleteUserService } from '../services/users/deleteUser.service'
import { listUsersService } from '../services/users/getUsers.service'
import updateUserService from '../services/users/updateUser.service'

const createUserController = async (req: Request, res: Response): Promise<Response> =>{
const data: IUser = req.body
const user = await createUserService(data)
return res.status(201).json(user)
}

const listUsersController = async (req: Request, res: Response) => {
    const users = await listUsersService()
    return res.json(users)
}

const updateUserController = async(req:Request, res:Response) =>{
    const data: IUserUpdate[] = req.body
    const idUser = parseInt(req.params.id)
    const updateUser = await updateUserService(data, idUser)
    return res.json(updateUser)
} 

const deleteUserController = async(req:Request, res:Response) =>{
    await deleteUserService(parseInt(req.params.id))
    return res.status(204).send()
}

export {
    createUserController, listUsersController, updateUserController, deleteUserController
}