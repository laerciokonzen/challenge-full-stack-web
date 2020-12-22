import { HomeController } from "./controller/HomeController";
import { StudentController } from "./controller/StudentController";

export const Routes = [{
    method: "get",
    route: "/",
    controller: HomeController,
    action: "index"
}, {
    method: "get",
    route: "/student",
    controller: StudentController,
    action: "all"
}, {
    method: "get",
    route: "/student/:academicRegister",
    controller: StudentController,
    action: "one"
}, {
    method: "post",
    route: "/student",
    controller: StudentController,
    action: "save"
}, {
    method: "put",
    route: "/student",
    controller: StudentController,
    action: "edit"
}, {
    method: "delete",
    route: "/student/:academicRegister",
    controller: StudentController,
    action: "delete"
}];