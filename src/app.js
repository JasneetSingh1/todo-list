import { Todo } from "./todo";
import { Project } from "./project";
import "./styles.css";

const project = new Project("Daily Tasks")
const toDo = new Todo("Laundry", "Laundry Time!", "2025-02-09", "Low")
project.addToProject(toDo);

console.log(project);


console.log(project.todoList[0].toggleComplete());
console.log(project.todoList[0]);