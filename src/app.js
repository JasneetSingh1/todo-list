import { Todo } from "./todo";
import { Project } from "./project";

const project = new Project("John")
const toDo = new Todo("Laundry", "Laundry Time!", "2025-02-09", "Low")
project.addToProject(toDo);

console.log(project);