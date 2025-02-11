import { renderTasks } from "./dom";
import { Project } from "./project";

const createProject = document.querySelector(".new-project-btn");
const dialog = document.querySelector("dialog");
const form = document.querySelector("form");
const projects = document.querySelector(".sidebar-projects");

export const projectEvent = createProject.addEventListener('click',() => {
    dialog.showModal();
} )

export const projectFormSubmit = form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(e);
    let name = document.body.querySelector("#name");
    const project = new Project(name.value);
    dialog.close();
})

export const projectTasks = projects.addEventListener("click", (e) => {
    renderTasks(e.target.textContent)
  
})
