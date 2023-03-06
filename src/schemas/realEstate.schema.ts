import { z } from 'zod'
import { addressSchema, createAddressSchema } from './address.schema'
import { returnCategorySchema } from './category.schema'

const estateSchema = z.object({
    value: z.string().or(z.number()),
    size: z.number().int().gt(0),
    address: createAddressSchema,
    categoryId: z.number(),
})

const returnEstateSchema = estateSchema.extend({
    id: z.number(),
    sold: z.boolean().default(false),
    createdAt: z.string(),
    updatedAt: z.string(),
    category:z.object({
        name: z.string(),
        id: z.number()
    })
}).omit({categoryId: true})

const returnEstateSchemaAdress = z.object({
    id: z.number(),
    value: z.string().or(z.number()),
    size: z.number().int().gt(0),
    address: addressSchema,
    category:z.object({
        name: z.string(),
        id: z.number()
    }),
    sold: z.boolean().default(false),
    createdAt: z.string(),
    updatedAt: z.string(),
})

const returnEstateSchedule = returnEstateSchema.omit({ address: true })

const returnAllEstatesSchema = returnEstateSchema.array()

const estateUpdateSchema = returnEstateSchema.partial()

const returnEstateByCategorySchema = returnCategorySchema.extend({
    realEstate: returnAllEstatesSchema
})

export {
    estateSchema,
    returnEstateSchema,
    returnAllEstatesSchema,
    estateUpdateSchema,
    returnEstateByCategorySchema,
    returnEstateSchedule,
    returnEstateSchemaAdress
}
