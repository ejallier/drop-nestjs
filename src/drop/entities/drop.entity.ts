import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from "src/users/user.entity";

@Entity()
export class Drop {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    latitude: string;

    @Column()
    longitude: string;

    @ManyToOne(type => User, user => user.drops)
    user: number;

    @Column()
    userId: number;
}
