import "reflect-metadata";
import {createConnection} from "typeorm";
import * as express from "express";
import * as bodyParser from "body-parser";
import {Request, Response} from "express";
import {Routes} from "./routes";

createConnection().then(async connection => {

    const app = express();
    app.use(bodyParser.json());

    Routes.forEach(route => {
        (app as any)[route.method](route.route, (req: Request, res: Response, next: Function) => {
            (new (route.controller as any))[route.action](req, res, next);
        });
    });

    
    app.listen(process.env.PORT || 3000);

    console.log(`Server has started on port ${process.env.PORT}. Open http://localhost:${process.env.PORT}/ to see results`);

}).catch(error => console.log(error));
