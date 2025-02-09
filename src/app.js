import { createTodo } from "./todo";
import { createProject } from "./project";

const project = createProject("John");
const toDo = createTodo("Laundry", "Laundry Time!", "20205-02-09", "Low")
project.addTodo(toDo);

console.log(project);