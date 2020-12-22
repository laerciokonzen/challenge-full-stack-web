import { StudentEntity } from "../domain/entities/StudentEntity";
import IStudentRepository from "../domain/IStudentRepository";

export default interface IStudentService {
    repository: IStudentRepository;
    getAll(): Promise<StudentEntity[]>
    get(academicRegister: number): Promise<StudentEntity>
    save(student: StudentEntity): Promise<StudentEntity>
    update(student: StudentEntity): Promise<StudentEntity>
    delete(academicRegister: number): Promise<void>
}