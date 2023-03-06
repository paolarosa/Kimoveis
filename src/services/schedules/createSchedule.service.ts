import { AppDataSource } from '../../data-source'
import { Repository } from 'typeorm'
import { RealEstate, Schedule, User } from '../../entities'
import { ISchedule, IScheduleReturn } from '../../interfaces/schedules.interface'
import { returnScheduleSchema } from '../../schemas/schedules.schema'
import { AppError } from '../../errors'


const createScheduleService = async (data:ISchedule, idToken:number): Promise<IScheduleReturn>  => {
    const userRepository: Repository<User> = AppDataSource.getRepository(User)
    const scheduleRepository: Repository<Schedule> = AppDataSource.getRepository(Schedule)
    const findUser = await userRepository.findOne({
        where: {
            id: idToken
        }
    })
    const estateRepository: Repository<RealEstate> = AppDataSource.getRepository(RealEstate)
    const findEstate = await estateRepository.findOne({
        where: {
            id: data.realEstateId!
        }
    })
    if(!findEstate){
        throw new AppError('RealEstate not found', 404)
    }
   /*   */
    const objectSchedule = {
        date: data.date,
        hour: data.hour,
        realEstate: findEstate!,
        user: findUser!
    }
    if(parseInt(data.hour) < 8 || parseInt(data.hour) > 18){
        throw new AppError('Invalid hour, available times are 8AM to 18PM', 400)
    }
    const dataSaturday = new Date(data.date)
    const checkDataIsSaturday = dataSaturday.getDay()
    
    if(checkDataIsSaturday == 6){
        throw new AppError('Invalid date, work days are monday to friday', 400)
    }
    const findScheduleDate = await scheduleRepository.createQueryBuilder("s")
    .where("s.date = :date", {date:data.date})
    .andWhere("s.hour = :hour", {hour:data.hour})
    .andWhere("s.realEstate.id = :id", {id: data.realEstateId})
    .getOne()
    console.log(1,findScheduleDate)
    if(findScheduleDate){
        throw new AppError('Schedule to this real estate at this date and time already exists', 409)
    } 
    const findScheduleQuery = await scheduleRepository.createQueryBuilder("s")
    .where("s.date = :date", {date:data.date})
    .andWhere("s.hour = :hour", {hour:data.hour})
    .andWhere("s.user.id = :id", {id: idToken})
    .getOne()
 
    console.log(2,findScheduleQuery)
    if(findScheduleQuery){
        throw new AppError('User schedule to this real estate at this date and time already exists', 409)
    } 

 
   /*  const findSchedule = await scheduleRepository.findOne({
        where:{
            date: data.date,
            hour: data.hour
        }
    })
    if(findSchedule){
        throw new AppError('Schedule to this real estate at this date and time already exists', 409)
    } */
 

    const schedule: Schedule = scheduleRepository.create(objectSchedule)
    await scheduleRepository.save(schedule)
    const newSchedule = returnScheduleSchema.parse(schedule)
    return newSchedule
    
}

export default createScheduleService