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

export { createCategoryController, listCategoriesController }