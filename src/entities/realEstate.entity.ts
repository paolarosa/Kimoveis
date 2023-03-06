import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import { Address } from "./addresses.entity";
import { Category } from "./categories.entity";
import { Schedule } from "./schedules.entity";

@Entity('real_estate')
class RealEstate{
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column({ default: false, nullable: true})
    sold: boolean

    @Column({ type: 'decimal', precision: 12, scale: 2, default: 0 })
    value: number | string

    @Column({type:"integer"})
    size:number

    @CreateDateColumn({type: "date"})
    createdAt: string

    @UpdateDateColumn({type: "date"})
    updatedAt: string

    @OneToOne(() => Address,{nullable:false})
    @JoinColumn()
    address: Address

    @ManyToOne(()=> Category,(categories) => categories.realEstate)
    category: Category

    @OneToMany(()=> Schedule,(schedules) => schedules.realEstate)
    schedules: Schedule[]

}

export { RealEstate }