import { z } from 'zod'
import { estateSchema, returnAllEstatesSchema, returnEstateByCategorySchema, returnEstateSchema } from '../schemas/realEstate.schema'

type IEstateReturn = z.infer<typeof returnEstateSchema>
type IEstate = z.infer <typeof estateSchema>
type IAllEstate = z.infer<typeof returnAllEstatesSchema>
type IEstateByCategory = z.infer<typeof returnEstateByCategorySchema>
type ICreateEstateAddress = z.infer<typeof estateSchema>
type IKeys = "value" | "size" | "address" | "categoryId"

export { IEstateReturn, IEstate, IAllEstate, IEstateByCategory, ICreateEstateAddress, IKeys }