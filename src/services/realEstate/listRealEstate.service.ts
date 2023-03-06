import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { RealEstate } from "../../entities";
import { IAllEstate, IEstateReturn } from "../../interfaces/estate.interface";
import { returnAllEstatesSchema } from "../../schemas/realEstate.schema";

const listEstateService = async ()/* : Promise<IAllEstate[]>  */=> {

  const estateRepository: Repository<RealEstate> = AppDataSource.getRepository(RealEstate)
  const findEstates: Array<RealEstate> = await estateRepository.createQueryBuilder('real_estate').
  innerJoinAndSelect('real_estate.address', 'addresses').
  leftJoin('real_estate.category', 'categories').
  getMany()

  return findEstates
}

export { listEstateService } 