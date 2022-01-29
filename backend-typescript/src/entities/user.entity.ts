import {Entity, PrimaryGeneratedColumn, Column, BaseEntity, CreateDateColumn, Unique} from "typeorm";
import {IsNotEmpty} from "class-validator";
import {User} from "@interfaces/users.interface";

@Entity()
export class UserEntity extends BaseEntity implements User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @IsNotEmpty()
    email: string;

    @Column()
    @IsNotEmpty()
    password: string;

    @Column()
    @IsNotEmpty()
    fullname: string;

    @CreateDateColumn()
    createdAt: Date;

}