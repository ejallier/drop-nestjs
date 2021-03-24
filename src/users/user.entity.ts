import { Entity, Column, PrimaryGeneratedColumn, OneToMany, BaseEntity } from 'typeorm';
import { Drop } from "src/drop/entities/drop.entity";

@Entity()
export class User extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 25 })
    firstName:string;

    @Column({ length: 25 })
    lastName:string;

    @Column({ length: 25 })
    code:string;

    @Column( {default: null, type: "date"})
    birthday:Date;

    @Column( {
        default: true
    })
    isActive:boolean;

    @OneToMany(type => Drop, drop => drop.user)
    drops: Drop[];


}
