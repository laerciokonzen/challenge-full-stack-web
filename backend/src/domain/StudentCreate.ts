import { StudentEntity } from "./entities/StudentEntity";
import IStudentRepository from "./IStudentRepository";
import StudentModule from "./StudentModule";

export default class StudentCreate extends StudentModule {

    constructor(studentRepository: IStudentRepository) {
        super(studentRepository);
    }

    public async create(student: StudentEntity) {
        const validated = StudentCreate.validateStudentData(student);
        if (validated) {
            return await this.repository.save(student);
        }
        throw new Error('Invalid Student data');
    }

    private static validateStudentData(student: StudentEntity) {
        if (typeof student.name !== 'string' || student.name.length === 0)
            return false;

        if (typeof student.email !== 'string' || student.email.length === 0)
            return false;

        if (typeof student.cpf !== 'string' || student.cpf.length === 0)
            return false;

        return true;
    }
}