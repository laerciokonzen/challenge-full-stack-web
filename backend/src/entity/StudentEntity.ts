import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class StudentEntity {

    @PrimaryGeneratedColumn()
    academicRegister: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    cpf: string;

}
