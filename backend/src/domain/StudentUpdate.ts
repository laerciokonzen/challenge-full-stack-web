import { StudentEntity } from "./entities/StudentEntity";
import IStudentRepository from "./IStudentRepository";
import StudentModule from "./StudentModule";

export default class StudentUpdate extends StudentModule {

    constructor(studentRepository: IStudentRepository) {
        super(studentRepository);
    }

    public async update(student: StudentEntity) {
        const validated = StudentUpdate.validateStudentData(student);
        if (validated) {
            return await this.repository.update(student);
        }
        throw new Error('Invalid Student data');
    }

    private static validateStudentData(student: StudentEntity) {
        // TODO
        return true;
    }
}