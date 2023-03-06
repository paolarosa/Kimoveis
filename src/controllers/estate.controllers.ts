import { Request, Response } from 'express'
import createEstateService from '../services/realEstate/createRealEstate.service'
import { listEstateCategoryService } from '../services/realEstate/listEstateCategory.service'
import { listEstateService } from '../services/realEstate/listRealEstate.service'


const listEstatesCategoryController = async(req:Request, res:Response): Promise<Response> =>{
    const categoryId: number = parseInt(req.params.id)
    const  estateCategory = await listEstateCategoryService(categoryId)
    return res.json(estateCategory)
}

const listEstateController = async (req: Request, res: Response): Promise<Response> => {
    const estate = await listEstateService()
    return res.json(estate)
}

const createEstateController = async (req: Request, res: Response): Promise<Response> =>{
    const estate = await createEstateService(req.body)
    return res.status(201).json(estate)
}

export { listEstateController, listEstatesCategoryController, createEstateController }

