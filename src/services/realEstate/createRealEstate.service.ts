import { AppDataSource } from '../../data-source'
import { Repository } from 'typeorm'
import { Address, Category, RealEstate } from '../../entities'
import { IEstate, IEstateReturn } from '../../interfaces/estate.interface'
import { returnEstateSchema, returnEstateSchemaAdress } from '../../schemas/realEstate.schema'
import { AppError } from '../../errors'

const createEstateService = async (dataEstate: IEstate): Promise<IEstateReturn | undefined> => {
    const addressRepository: Repository<Address> = AppDataSource.getRepository(Address)
    const estateRepository: Repository<RealEstate> = AppDataSource.getRepository(RealEstate)
    const categoryRepository: Repository<Category> = AppDataSource.getRepository(Category)
    const findAddress = await addressRepository.findOne({
        where: {
            street: dataEstate.address.street,
            zipCode: dataEstate.address.zipCode,
            city: dataEstate.address.city,
            state: dataEstate.address.state
        }
    })
    if (findAddress) {
        throw new AppError('Address already exists', 409)
    }
    const findCategory = await categoryRepository.findOne({
        where: {
            id: dataEstate.categoryId!
        }
    })

    if (findCategory) {
        const newAddress = addressRepository.create(dataEstate.address)
        await addressRepository.save(newAddress)
        const estate = estateRepository.create({
            ...dataEstate,
            address: newAddress,
            category: findCategory
        })
        await estateRepository.save(estate)
        const newEstate = returnEstateSchemaAdress.parse(estate)
        return newEstate
    } else { throw new AppError('Invalid', 409) }
}


export default createEstateService  