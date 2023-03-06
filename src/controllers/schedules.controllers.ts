import { Request, Response } from 'express'
import createScheduleService from '../services/schedules/createSchedule.service'
import { listScheduleEstateService } from '../services/schedules/listScheduleEstate.service'

const lisScheduleEstateController = async(req:Request, res:Response): Promise<Response> =>{
    const estateId: number = parseInt(req.params.id)
    const  scheduleEstate = await listScheduleEstateService(estateId)
    return res.json(scheduleEstate)
}

const createScheduleController = async(req:Request, res:Response): Promise<Response> =>{
    const idToken = req.user.id
    const schedule = await createScheduleService(req.body, idToken)
    return res.status(201).json({ message:`Schedule created`})

}

export{ lisScheduleEstateController, createScheduleController}