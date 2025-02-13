import { renderTasks } from "./dom";
import { Project } from "./project";
import { createProjectDOM } from "./dom";
import { Todo } from "./todo";
import { storeProject, getProjectStored } from "./storageService";

const createProject = document.querySelector(".new-project-btn");
const Projectdialog = document.querySelector(".project-dialog");
const projectForm = document.querySelector(".project-form");
const projects = document.querySelector(".sidebar-projects");

const createTask = document.querySelector(".add-task");
const taskDialog = document.querySelector(".task-dialog");
const taskForm = document.querySelector(".task-form");

const taskEditBtn = document.querySelector(".task-edit");
const taskDeleteBtn = document.querySelector(".task-delete");
const taskViewBtn = document.querySelector(".task-view");

export const taskEvent = createTask.addEventListener("click", (e) => {
    taskForm.setAttribute("name", e.target.name );
    taskDialog.showModal();
})

export const taskFormSubmit = taskForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let title = document.body.querySelector("#title");
    let description = document.body.querySelector("#description");
    let dueDate = document.body.querySelector("#date");
    let priority;
    if(document.body.querySelector("#low").checked){
         priority = document.body.querySelector("#low");
    }
    else if (document.body.querySelector("#medium").checked){
         priority = document.body.querySelector("#medium");
    }
    else{
         priority = document.body.querySelector("#high");
    }

    const toDo = new Todo(title.value, description.value, dueDate.value, priority.value);
    const project = getProjectStored(e.target.name);
    console.log(project);
    console.log(project instanceof Project);
    console.log(typeof project);
    project.addToProject(toDo);

    renderTasks(e.target.name);
    taskForm.setAttribute("name", "" );
    taskDialog.close();
})

export const projectEvent = createProject.addEventListener('click',() => {
    Projectdialog.showModal();
} )

export const projectFormSubmit = projectForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let name = document.body.querySelector("#project-name");
    
    const project = new Project(name.value);
    createProjectDOM(project.name);
    name.value = "";
    Projectdialog.close();
})

export const projectTasks = projects.addEventListener("click", (e) => {
    renderTasks(e.target.textContent)
  
})

export function handleEditTask(projectName, taskTitle) {
    console.log(`Editing task: ${taskTitle} in project: ${projectName}`);
    // Add logic to find the task, open edit form, and update storage.
}

export function handleViewTask(projectName, taskTitle) {
    console.log(`Viewing task: ${taskTitle} in project: ${projectName}`);
    // Add logic to display task details in a modal or new section.
}

export function handleDeleteTask(projectName, taskTitle) {
    console.log(`Deleting task: ${taskTitle} in project: ${projectName}`);
    // Add logic to remove the task from the project and update the UI.
}


