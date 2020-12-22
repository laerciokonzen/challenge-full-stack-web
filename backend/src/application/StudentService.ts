import { StudentEntity } from "../domain/entities/StudentEntity";
import IStudentRepository from "../domain/IStudentRepository";
import StudentCreate from "../domain/StudentCreate";
import StudentDelete from "../domain/StudentDelete";
import StudentUpdate from "../domain/StudentUpdate";
import IStudentService from "../services/IStudentService";

export default class StudentService implements IStudentService {

    repository: IStudentRepository;

    constructor(repository: IStudentRepository) {
        this.repository = repository;
    }

    async getAll(): Promise<StudentEntity[]> {
        const students = await this.repository.getAll();
        return students;
    }
    async get(academicRegister: number): Promise<StudentEntity> {
        const student = await this.repository.getStudent(academicRegister);
        return student;
    }
    async save(student: StudentEntity): Promise<StudentEntity> {
        const create = new StudentCreate(this.repository);
        try {
            return await create.create(student);
        } catch (error) {
            throw error;
        }
    }
    async update(student: StudentEntity): Promise<StudentEntity> {
        const studentUpdate = new StudentUpdate(this.repository);
        try {
            return await studentUpdate.update(student);
        } catch (error) {
            throw error;
        }
    }
    async delete(academicRegister: number): Promise<void> {
        const studentDelete = new StudentDelete(this.repository);
        try {
            return await studentDelete.delete(academicRegister);
        } catch (error) {
            throw error;
        }
        await this.repository.delete(academicRegister);
        return;
    }

}