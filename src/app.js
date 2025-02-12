import { Todo } from "./modules/todo";
import { Project } from "./modules/project";
import "./styles/styles.css";
import "./modules/events";

const project = new Project("Daily Tasks");
const toDo = new Todo("Laundry", "Laundry Time!", "2025-02-09", "Low");
project.addToProject(toDo);
project.addToProject(new Todo("Work", "Work Time!", "2025-02-12", "High"));

