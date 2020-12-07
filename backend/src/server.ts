import "reflect-metadata";
import {createConnection} from "typeorm";
import App from "./App";

createConnection().then(async connection => {
    const app = new App();
    app.startServer();
}).catch(error => console.log(error));
