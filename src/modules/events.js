import { renderTasks, renderTaskView, renderTaskEditView} from "./dom";
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
    project.addToProject(toDo);

    title.value = "";
    description.value = "";
    dueDate.value = "";
    priority.value = "";

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
    renderTasks(e.target.textContent);
  
})


export function handleEditTask(projectName, taskTitle) {
    renderTaskEditView(projectName, taskTitle);
    const taskEditDialog = document.querySelector(".task-edit-dialog");
    taskEditDialog.showModal();

    
    const taskEditForm = document.querySelector(".task-edit-form");


    taskEditForm.addEventListener("submit", (e) => {
        const project = getProjectStored(projectName);
        const projectList = project.todoList;
        const targetTask = projectList.findIndex((task => task.title == taskTitle));
        e.preventDefault();

        let title = document.querySelector("#edittitle");
        let description = document.querySelector("#editdescription");
        let dueDate = document.querySelector("#editdate");
        let priority;
        if(document.querySelector("#editlow").checked){
             priority = document.querySelector("#editlow");
        }
        else if (document.querySelector("#editmedium").checked){
             priority = document.querySelector("#editmedium");
        }
        else{
             priority = document.querySelector("#edithigh");
        }

        projectList[targetTask].title = title.value;
        projectList[targetTask].description = description.value;
        projectList[targetTask].dueDate = dueDate.value;
        projectList[targetTask].priority = priority.value;

        storeProject(project);
        renderTasks(projectName);
        

        taskEditDialog.close();
        
    })


}



export function handleViewTask(projectName, taskTitle) {
    renderTaskView(projectName, taskTitle);
    const taskViewDialog = document.querySelector(".task-view-dialog");
    const handleViewBtn = document.querySelector(".task-view-btn");
    taskViewDialog.showModal();

    handleViewBtn.addEventListener("click", () => {
        taskViewDialog.close();
    })

    
}



export function handleDeleteTask(projectName, taskTitle) {
    const project = getProjectStored(projectName);
    const projectList = project.todoList;
    const targetTask = projectList.findIndex((task => task.title == taskTitle));
    projectList.splice(targetTask, 1);
    storeProject(project);
    renderTasks(project.name);
}


