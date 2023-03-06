import { Router } from 'express'
import { createScheduleController, lisScheduleEstateController } from '../controllers/schedules.controllers'
import { ensureAdminIsValid } from '../middlewares/adminIsValidMiddleware'
import DataIsValidMiddleware from '../middlewares/dataIsValid.middleware'
import { tokenIsValidMiddleware } from '../middlewares/tokenIsValid.middleware'
import { validateExtraKey } from '../middlewares/validateExtraKeyMiddleware'
import { scheduleSchema } from '../schemas/schedules.schema'


const schedulesRoutes: Router = Router()

schedulesRoutes.get('/realEstate/:id', tokenIsValidMiddleware, ensureAdminIsValid, lisScheduleEstateController)
schedulesRoutes.post('',tokenIsValidMiddleware,DataIsValidMiddleware(scheduleSchema), createScheduleController)

export default schedulesRoutes