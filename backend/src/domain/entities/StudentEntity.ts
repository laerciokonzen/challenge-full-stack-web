import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity({
    name: "student"
})
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
