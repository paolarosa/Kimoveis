import { z } from 'zod'
import { estateSchema, returnEstateSchedule } from './realEstate.schema'

const scheduleSchema = z.object({
    date: z.string(),
    hour: z.string(),
    realEstateId: z.number().optional(),
    userId: z.number().optional()
})

const returnScheduleSchema = scheduleSchema.extend({
    id: z.number()
})

const returnAllScheduleSchema = returnScheduleSchema.array()

const returnScheduleEstateSchema = returnEstateSchedule.extend({
    schedules: returnAllScheduleSchema
})

export { scheduleSchema, returnScheduleSchema, returnAllScheduleSchema, returnScheduleEstateSchema}
 