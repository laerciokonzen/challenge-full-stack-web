import { Request, Response } from "express";
import StudentService from "../application/StudentService";
import StudentRepository from "../domain/StudentRepository";

export class StudentController {

    async all(request: Request, response: Response) {
        const studentService = new StudentService(new StudentRepository());
        const studentList = await studentService.getAll();
        response.status(200).json(studentList);
    }

    async one(request: Request, response: Response) {
        const studentService = new StudentService(new StudentRepository());
        const student = await studentService.get(parseInt(request.params.academicRegister, 10));
        if (student) {
            response.status(200).json(student);
        } else {
            response.status(404).send();
        }
    }

    async save(request: Request, response: Response) {
        try {
            const studentService = new StudentService(new StudentRepository());
            const student = await studentService.save(request.body);
            response.status(200).json(student);
        } catch (error) {
            response.status(422).json({
                error: error.message
            });
        }
    }

    async edit(request: Request, response: Response) {
        try {
            const studentService = new StudentService(new StudentRepository());
            const student = await studentService.update(request.body);
            response.status(200).json(student);
        } catch (error) {
            response.status(422).json({
                error: error.message
            });
        }
    }

    async delete(request: Request, response: Response) {
        try {
            const studentService = new StudentService(new StudentRepository());
            await studentService.delete(parseInt(request.params.academicRegister, 10));
            response.status(204).send();
        } catch (error) {
            response.status(422).json({
                error: error.message
            });
        }
    }
}