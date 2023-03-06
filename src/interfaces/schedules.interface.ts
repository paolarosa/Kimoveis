import { z } from 'zod'
import { returnAllScheduleSchema, returnScheduleSchema, scheduleSchema } from '../schemas/schedules.schema'

type ISchedule = z.infer<typeof scheduleSchema>
type IScheduleReturn = z.infer<typeof returnScheduleSchema>
type IAllSchedulesReturn = z.infer<typeof returnAllScheduleSchema>
export {ISchedule, IScheduleReturn, IAllSchedulesReturn}