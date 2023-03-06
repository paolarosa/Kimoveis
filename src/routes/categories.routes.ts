import { Router } from 'express'
import { createCategoryController, listCategoriesController } from '../controllers/categories.controllers'
import { listEstatesCategoryController } from '../controllers/estate.controllers'
import { ensureAdminIsValid } from '../middlewares/adminIsValidMiddleware'
import { ensureUserExistsMiddleware } from '../middlewares/ensureUserExists.middleware'
import { tokenIsValidMiddleware } from '../middlewares/tokenIsValid.middleware'

const categoryRoutes: Router = Router()

categoryRoutes.post('',tokenIsValidMiddleware,ensureAdminIsValid, createCategoryController)
categoryRoutes.get('', listCategoriesController)
categoryRoutes.get('/:id/realEstate', listEstatesCategoryController)

export default categoryRoutes