import { z } from 'zod'
import { returnAllUsersSchema, returnUserSchema, userSchema, userUpdateSchema } from '../schemas/user.schema'

type IUser = z.infer<typeof userSchema>
type IUserReturn = z.infer<typeof returnUserSchema>
type IAllUsersReturn = z.infer<typeof returnAllUsersSchema>
type IUserUpdate = z.infer<typeof userUpdateSchema>
export { IUser, IUserReturn, IAllUsersReturn, IUserUpdate}
