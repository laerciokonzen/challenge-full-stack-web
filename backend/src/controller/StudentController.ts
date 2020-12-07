import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {StudentEntity} from "../entity/StudentEntity";

export class StudentController {

    private studentRepository = getRepository(StudentEntity);

    async all(request: Request, response: Response, next: NextFunction) {
        const studentList = await this.studentRepository.find();
        response.status(200).json(studentList);
    }

    async one(request: Request, response: Response, next: NextFunction) {
        const student = await this.studentRepository.findByIds([request.params.academicRegister]);
        response.status(200).json(student);
    }

    async save(request: Request, response: Response, next: NextFunction) {
        const student = await this.studentRepository.save(request.body);
        response.status(200).json();
    }

    async edit(request: Request, response: Response, next: NextFunction) {
        const student = await this.studentRepository.save(request.body);
        response.status(200).json();
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        let userToRemove = await this.studentRepository.findOne(request.params.id);
        await this.studentRepository.remove(userToRemove);
    }

}