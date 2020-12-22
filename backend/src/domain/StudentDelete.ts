import { StudentEntity } from "./entities/StudentEntity";
import IStudentRepository from "./IStudentRepository";
import StudentModule from "./StudentModule";

export default class StudentDelete extends StudentModule {

    constructor(studentRepository: IStudentRepository) {
        super(studentRepository);
    }

    public async delete(academicRegister: number) {
        const student = await this.repository.getStudent(academicRegister);
        const validated = StudentDelete.validateStudentData(student);
        if (validated) {
            return await this.repository.delete(academicRegister);
        }
        throw new Error('Invalid Student data');
    }

    private static validateStudentData(student: StudentEntity) {
        if (!student) {
            return false;
        }
        return true;
    }
}