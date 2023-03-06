import { z } from 'zod'

const categorySchema = z.object({
    name: z.string().min(3).max(45)
})

const returnCategorySchema = categorySchema.extend({
    id: z.number()
})

const returnAllCategoriesSchema = returnCategorySchema.array()

const categoryUpdateSchema = returnCategorySchema.partial()

export { categorySchema, returnCategorySchema, returnAllCategoriesSchema, categoryUpdateSchema }
