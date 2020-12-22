import { StudentEntity } from "./entities/StudentEntity";

export default interface IStudentRepository {
    getAll(): Promise<StudentEntity[]>
    getStudent(academicRegister: number): Promise<StudentEntity>
    save(student: StudentEntity): Promise<StudentEntity>
    update(student: StudentEntity): Promise<StudentEntity>
    delete(academicRegister: number): Promise<void>
}