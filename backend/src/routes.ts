import { HomeController } from "./controller/HomeController";

export const Routes = [{
    method: "get",
    route: "/",
    controller: HomeController,
    action: "index"
}];