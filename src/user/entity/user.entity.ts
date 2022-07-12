import { BaseEntity } from "src/common/entities/base.entity";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User extends BaseEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string;
    
    @Column()
    email: string;

    @Column()
    username: string;

    @Column()
    password: string;

}