import { getRepository } from "typeorm";
import { StudentEntity } from "./entities/StudentEntity";
import IStudentRepository from "./IStudentRepository";

export default class StudentRepository implements IStudentRepository {

    private studentRepository = getRepository(StudentEntity);

    public async save(student: StudentEntity): Promise<StudentEntity> {
        const savedStudent = await this.studentRepository.save(student);
        return savedStudent;
    }
    public async update(student: StudentEntity): Promise<StudentEntity> {
        const savedStudent = await this.studentRepository.save(student);
        return savedStudent;
    }
    public async delete(academicRegister: number): Promise<void> {
        const student = await this.studentRepository.findOne({ where: {academicRegister} });
        await this.studentRepository.delete(academicRegister);
        return;
    }
    public async getAll(): Promise<StudentEntity[]> {
        const studentList = await this.studentRepository.find();
        return studentList;
    }
    public async getStudent(academicRegister: number): Promise<StudentEntity> {
        const student = await this.studentRepository.findOne({ where: {academicRegister} });
        return student;
    }

}