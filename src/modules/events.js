import { renderTasks } from "./dom";
import { Project } from "./project";
import { createProjectDOM } from "./dom";

const createProject = document.querySelector(".new-project-btn");
const Projectdialog = document.querySelector(".project-dialog");
const projectForm = document.querySelector(".project-form");
const projects = document.querySelector(".sidebar-projects");

const createTask = document.querySelector("#add-task");
const taskDialog = document.querySelector(".task-dialog");
const taskForm = document.querySelector(".task-form");

export const taskEvent = createTask.addEventListener("click", () => {
    taskDialog.showModal();
})

export const projectEvent = createProject.addEventListener('click',() => {
    Projectdialog.showModal();
} )

export const projectFormSubmit = projectForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let name = document.body.querySelector("#project-name");
    
    const project = new Project(name.value);
    createProjectDOM(name.value);
    name.value = "";
    Projectdialog.close();
})

export const projectTasks = projects.addEventListener("click", (e) => {
    renderTasks(e.target.textContent)
  
})

// export const taskFormSubmit = taskForm.addEventListener("submit", (e) => {
//     e.preventDefault();
//     let name = document.body.querySelector("#name");
    
//     const project = new Project(name.value);
//     createProjectDOM(name.value);
//     name.value = "";
//     Projectdialog.close();
// })
