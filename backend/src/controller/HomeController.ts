import { NextFunction, Request, Response } from "express";

export class HomeController {
    index(request: Request, response: Response, next: NextFunction) {
        response.json({
            message: 'Acessando home'
        })
    }
}