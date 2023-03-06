import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Category } from "../../entities/categories.entity";
import { returnAllCategoriesSchema } from "../../schemas/category.schema";


const listCategoriesService = async () => {

  const categoryRepository: Repository<Category> = AppDataSource.getRepository(Category)

  const findCategories: Array<Category> = await categoryRepository.find()
 const categories = returnAllCategoriesSchema.parse(findCategories) 

  return categories
}

export { listCategoriesService } 