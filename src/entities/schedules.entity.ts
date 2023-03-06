import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { RealEstate } from "./realEstate.entity";
import { User } from "./users.entity";

@Entity('schedules_users_properties')
class Schedule{
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column({ type: 'date' })
    date: string | Date

    @Column({ type: 'time' })
    hour: string 

    @ManyToOne(()=> User,(user) => user.schedules)
    user: User

    @ManyToOne(()=> RealEstate,(estate) => estate.schedules)
    realEstate: RealEstate
}

export { Schedule }