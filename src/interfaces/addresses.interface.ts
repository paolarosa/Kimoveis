import { z } from 'zod'
import { addressSchema, createAddressSchema } from '../schemas/address.schema'

type IAddressReturn = z.infer<typeof addressSchema>
type IAddress = z.infer <typeof createAddressSchema>

export { IAddress, IAddressReturn}