import { renderTasks } from "./dom";
import { Project } from "./project";

const createProject = document.querySelector(".new-project-btn");
const Projectdialog = document.querySelector(".project-dialog");
const form = document.querySelector("form");
const projects = document.querySelector(".sidebar-projects");

export const projectEvent = createProject.addEventListener('click',() => {
    Projectdialog.showModal();
} )

export const projectFormSubmit = form.addEventListener("submit", (e) => {
    e.preventDefault();
    let name = document.body.querySelector("#name");
    
    const project = new Project(name.value);
    name.value = "";
    Projectdialog.close();
})

export const projectTasks = projects.addEventListener("click", (e) => {
    renderTasks(e.target.textContent)
  
})
