import { AppDataSource } from '../../data-source'
import { Repository } from 'typeorm'
import { Category } from '../../entities/categories.entity'
import { returnCategorySchema } from '../../schemas/category.schema'
import { ICategory, ICategoryReturn } from '../../interfaces/category.interface'
import { AppError } from '../../errors'

const createCategoryService = async (data: ICategory): Promise<ICategoryReturn> => {
    const categoryRepository: Repository<Category> = AppDataSource.getRepository(Category)
    const findCAtegoryName = await categoryRepository.findOne({
        where:{
            name: data.name
        }
    })
    if(findCAtegoryName){
        throw new AppError('Category already exists', 409)
    }
    const category: Category = categoryRepository.create(data)
    await categoryRepository.save(category)
    const newCategory = returnCategorySchema.parse(category)
    
    return newCategory

}

export default createCategoryService