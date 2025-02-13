import { getProjectStored } from "./storageService";

function createProjectDOM(project){
    const button = document.createElement("button");
    const content = document.querySelector(".sidebar-projects");
    button.classList.add(`project`);
    button.textContent = project;
    content.appendChild(button);

}



function renderTasks(projectName){
    const taskContainer = document.querySelector(".content-body");
    taskContainer.textContent = "";

    const project = getProjectStored(projectName);
    const projectTitle = document.querySelector(".project-header");
    projectTitle.textContent = project.name;

    const projectButton = document.querySelector(".add-task");
    projectButton.setAttribute("name", `${project.name}`);
    projectButton.style.display = "block";
    
    const toDos = project.todoList;
    toDos.forEach((toDo) => {
        
        const task = document.createElement("div");
        task.classList.add("task");

        const taskContent = document.createElement("div");

        const taskTitle = document.createElement("h3");
        const taskDescription = document.createElement("p");

        const taskDate = document.createElement("p");
        taskDate.classList.add("task-date");

        const taskWidget = document.createElement("div");

        taskTitle.textContent = toDo.title;
        taskDescription.textContent = toDo.description;
        taskDate.textContent = toDo.dueDate;

        task.appendChild(taskContent);
        task.appendChild(taskWidget);
        taskContent.appendChild(taskTitle);
        taskContent.appendChild(taskDescription);
        taskContent.appendChild(taskDate);

        taskContainer.appendChild(task);

        
    })
    
}

export {createProjectDOM, renderTasks};