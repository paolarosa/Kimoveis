import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Category } from "../../entities";
import { AppError } from "../../errors";
import { IEstateByCategory } from "../../interfaces/estate.interface";
import { returnEstateByCategorySchema } from "../../schemas/realEstate.schema";

const listEstateCategoryService = async (categoryId: number)/* : Promise<IEstateByCategory> */  => {

  const categoryRepository: Repository<Category> = AppDataSource.getRepository(Category)
  const findCategory = await categoryRepository.findOne({
    where:{
        id: categoryId
    },
    relations: {
      realEstate: true
    }
  })
  if(!findCategory){
    throw new AppError('Category not found', 404)
}
/*   const returnEstates = returnEstateByCategorySchema.parse(findCategory)  */

  return findCategory
}

export { listEstateCategoryService } 