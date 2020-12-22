import "reflect-metadata";
import {createConnection} from "typeorm";
import App from "./App";

console.log(`starting server...`)

createConnection().then(async connection => {
    const app = new App();
    app.startServer();
    
    console.log(`Server has started on port ${process.env.PORT}.\nOpen http://localhost:${process.env.PORT}/ to see results`);
    
}).catch(error => console.log(error));
