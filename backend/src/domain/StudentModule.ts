import IStudentRepository from "./IStudentRepository";

export default class StudentModule {
    repository: IStudentRepository;

    constructor(studentRepository: IStudentRepository) {
        this.repository = studentRepository;
    }
}
