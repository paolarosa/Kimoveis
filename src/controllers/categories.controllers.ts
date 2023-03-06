import { Request, Response } from 'express'
import { ICategory } from '../interfaces/category.interface'
import createCategoryService from '../services/categories/createCategory.service'
import { listCategoriesService } from '../services/categories/getCategories.service'

const createCategoryController = async (req: Request, res: Response): Promise<Response> => {
    const data: ICategory = req.body
    const category = await createCategoryService(data)
    return res.status(201).json(category)
}

const listCategoriesController = async (req: Request, res: Response) => {
    const category = await listCategoriesService()
    return res.json(category)
}

/*

const listUsersController = async (req: Request, res: Response) => {
    const users = await listUsersService()
    return res.json(users)
}

const updateUserController = async(req:Request, res:Response) =>{
    console.log("controller")
    const data: IUserUpdate[] = req.body
    const idUser = parseInt(req.params.id)
    const updateUser = await updateUserService(data, idUser)
    return res.json(updateUser)
} 

const deleteUserController = async(req:Request, res:Response) =>{
    await deleteUserService(parseInt(req.params.id))
    return res.status(204).send()
}
 */
export { createCategoryController, listCategoriesController }