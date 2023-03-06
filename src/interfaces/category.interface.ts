import { z } from 'zod'
import { categorySchema, categoryUpdateSchema, returnAllCategoriesSchema, returnCategorySchema } from '../schemas/category.schema'

type ICategory = z.infer<typeof categorySchema>
type ICategoryReturn = z.infer<typeof returnCategorySchema>
type IAllCategoriesReturn = z.infer<typeof returnAllCategoriesSchema>
type ICategoryUpdate = z.infer<typeof categoryUpdateSchema>
export { ICategory, ICategoryReturn, IAllCategoriesReturn, ICategoryUpdate}