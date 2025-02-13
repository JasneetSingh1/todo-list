import { getProjectStored } from "./storageService";
import { handleDeleteTask, handleEditTask, handleViewTask } from "./events";

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

        const dropDownMenu = document.createElement("div");
        dropDownMenu.classList.add("dropdown-container");
        dropDownMenu.setAttribute("tabindex", "-1");

        const threeDots = document.createElement("div");
        threeDots.classList.add("three-dots");

        const dropdown = document.createElement("div");
        dropdown.classList.add("dropdown");

        dropDownMenu.appendChild(threeDots);
        dropDownMenu.appendChild(dropdown);

        const dropEditButton = document.createElement("button");
        dropEditButton.classList.add("task-edit");
        dropEditButton.textContent = "Edit";
        
        
        const dropViewButton = document.createElement("button");
        dropViewButton.classList.add("task-view");
        dropViewButton.textContent = "View";

        const dropDeleteButton = document.createElement("button");
        dropDeleteButton.classList.add("task-delete");     
        dropDeleteButton.textContent = "Delete";

        dropEditButton.onclick = () => handleEditTask(project.name, toDo.title);
        dropViewButton.onclick = () => handleViewTask(project.name, toDo.title);
        dropDeleteButton.onclick = () => handleDeleteTask(project.name, toDo.title);

        dropdown.appendChild(dropViewButton);
        dropdown.appendChild(dropEditButton);
        dropdown.appendChild(dropDeleteButton);

        taskTitle.textContent = toDo.title;
        taskDescription.textContent = toDo.description;
        taskDate.textContent = toDo.dueDate;

        task.appendChild(taskContent);
        task.appendChild(dropDownMenu);
        taskContent.appendChild(taskTitle);
        taskContent.appendChild(taskDescription);
        taskContent.appendChild(taskDate);

        taskContainer.appendChild(task);

        
    })
    
}

export {createProjectDOM, renderTasks};