import express from "express";
import cors from 'cors';
import bodyParser from "body-parser";
import { Routes } from "./routes";
import { Request, Response } from "express";

export default class App {
    readonly express: express.Application

    constructor() {
        this.express = express();
        this.initApp();
    }

    initApp() {
        this.middlewares();
        this.routes();
    }

    routes() {
        Routes.forEach(route => {
            console.log(`Registering route for method ${route.method} on ${route.route}`);
            (this.express as any)[route.method](route.route, (req: Request, res: Response, next: Function) => {
                (new (route.controller as any))[route.action](req, res, next);
            });
        });
    }

    middlewares() {
        this.express.use(bodyParser.json())
        this.express.use(cors())
    }

    startServer() {
        return this.express.listen(process.env.PORT || 3000);
    }
}