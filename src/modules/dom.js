import { getProject } from "./storageService";

function createProjectDOM(project){
    const button = document.createElement("button");
    const content = document.querySelector(".sidebar-projects");
    button.classList.add(`project`);
    button.textContent = project;
    content.appendChild(button);

}

function renderTasks(projectName){
    const project = getProject(projectName);
    console.log(project);
}

export {createProjectDOM, renderTasks};