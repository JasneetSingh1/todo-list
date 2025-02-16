import { getProjectStored } from "./storageService";
import { handleDeleteTask, handleEditTask, handleViewTask, toggleTaskComplete } from "./events";

function createProjectDOM(project){
    const button = document.createElement("button");
    const content = document.querySelector(".sidebar-projects");
    button.classList.add(`project`);
    button.textContent = project;
    content.appendChild(button);

}

function renderTaskView(projectName, taskTitle){
    const project = getProjectStored(projectName);
    const body = document.querySelector("body");
    const taskView = document.createElement("dialog");
    taskView.classList.add("task-view-dialog");
    const task = project.todoList.filter((task) => task.title == taskTitle);
    taskView.innerHTML = `

                    <label for="title">Title:</label>
                    <input type="text" id="title" name="title" value="${task[0].title}" readonly>

                    <label for="description">Description:</label>
                    <input type="text" id="description" name="description" value="${task[0].description}" readonly>
                    
                    <label for="date">Date:</label>
                    <input type="text" id="date" name="date" value="${task[0].dueDate}" readonly>
                    
                    <label for="priority">Priority:</label>
                    <input type="text" id="priority" name="priority" value="${task[0].priority}" readonly>                   

                    <button class="task-view-btn" type="submit">Close</button>
                
            `
    body.appendChild(taskView);
    
}

function renderTaskEditView(projectName, taskTitle){
    const project = getProjectStored(projectName);
    const contentContainer = document.querySelector("#content-container");
    const taskEditView = document.querySelector(".task-edit-dialog");
    const task = project.todoList.filter((todo) => todo.title == taskTitle);
    taskEditView.innerHTML = `

                    <form class="task-edit-form" action="" method="dialog">
    
                    <label for="edittitle">Title</label>
                    <input type="text" id="edittitle" name="title" value="${task[0].title}" required>

                    <label for="editdescription">Description</label>
                    <input type="text" id="editdescription" name="description" value="${task[0].description}" required>
                    
                    <label for="editdate">Date</label>
                    <input type="date" id="editdate" name="date" value="${task[0].dueDate}" required>

                    <input type="radio" id="editlow" name="priority" value="low" ${(task[0].priority == "low") ? "checked" : ""} required>
                    <label for="editlow">Low</label>
                    <input type="radio" id="editmedium" name="priority" value="medium" ${(task[0].priority == "medium") ? "checked" : ""} >
                    <label for="editmedium">Medium</label>
                    <input type="radio" id="edithigh" name="priority" value="high" ${(task[0].priority == "high") ? "checked" : ""} >
                    <label for="edithigh">High</label>

                    <button class="task-edit-form-submit" type="submit">Submit</button>
                </form>
                
            `;
    contentContainer.appendChild(taskEditView);
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
        taskContent.classList.add("task-content");

        const taskCheck = document.createElement("input");
        taskCheck.setAttribute("type", "checkbox");
        taskCheck.setAttribute("name", "completed");
        taskCheck.onclick = () => toggleTaskComplete(project.name, toDo.title);

        const checkboxContainer = document.createElement("div");
        checkboxContainer.classList.add("checkbox-container");
        

        const taskDetails = document.createElement("div");
        taskDetails.classList.add("task-details");

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
        checkboxContainer.appendChild(taskCheck);
        taskDetails.appendChild(taskTitle);
        taskDetails.appendChild(taskDescription);
        taskDetails.appendChild(taskDate);

        taskContent.appendChild(checkboxContainer);
        taskContent.appendChild(taskDetails);

        taskContainer.appendChild(task);

        
    })
    
}

export {createProjectDOM, renderTasks, renderTaskView, renderTaskEditView};