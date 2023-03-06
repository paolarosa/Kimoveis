import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { RealEstate } from "../../entities";
import { AppError } from "../../errors";
import { returnScheduleEstateSchema } from "../../schemas/schedules.schema";

const listScheduleEstateService = async (estateId: number): Promise<any> => {

  const estateRepository: Repository<RealEstate> = AppDataSource.getRepository(RealEstate)
  const estateSchedule = await estateRepository.createQueryBuilder('real_estate').
    innerJoin('real_estate.schedules', 'schedules_users_properties').
    innerJoin('schedules_users_properties.user', 'users').
    innerJoin('real_estate.address', 'addresses').
    leftJoin('real_estate.category', 'categories').
    select(['real_estate', 'schedules_users_properties', 'users', 'addresses', 'categories']).
    where('real_estate.id = :id', { id: estateId }).
    getOne()

  const findEstate = await estateRepository.findOne({
    where: {
      id: estateId!
    }
  })
  if (!findEstate) {
    throw new AppError('RealEstate not found', 404)
  }
  return estateSchedule
}

export { listScheduleEstateService }   