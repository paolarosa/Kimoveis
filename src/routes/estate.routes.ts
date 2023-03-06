import { Router } from 'express'
import { createEstateController, listEstateController, listEstatesCategoryController } from '../controllers/estate.controllers'
import { ensureAdminIsValid } from '../middlewares/adminIsValidMiddleware'
import DataIsValidMiddleware from '../middlewares/dataIsValid.middleware'
import { tokenIsValidMiddleware } from '../middlewares/tokenIsValid.middleware'
import { validateExtraKey } from '../middlewares/validateExtraKeyMiddleware'
import { estateSchema } from '../schemas/realEstate.schema'

const estateRoutes: Router = Router()

estateRoutes.post('',tokenIsValidMiddleware, ensureAdminIsValid,DataIsValidMiddleware(estateSchema),/* validateExtraKey, */ createEstateController)
estateRoutes.get('', listEstateController)

export default estateRoutes