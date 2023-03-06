import { z } from 'zod'
import { hashSync } from 'bcryptjs'

const userSchema = z.object({
    name: z.string().min(3).max(45),
    email: z.string().email().max(45),
    password: z.string().min(4).max(20).transform((password) => {
        return hashSync(password, 10)
    }),
    admin: z.boolean().optional().default(false)
})

const returnUserSchema = userSchema.extend({
    id: z.number(),
    createdAt: z.string(),
    updatedAt: z.string(),
    deletedAt: z.string().nullish()
}).omit({password: true})

const returnAllUsersSchema = returnUserSchema.array()

const userUpdateSchema = returnUserSchema.partial()

export { userSchema, returnUserSchema, returnAllUsersSchema, userUpdateSchema }
