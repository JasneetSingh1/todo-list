import { Project } from "./project";
function storeProject(project){
    sessionStorage.setItem(project.name, JSON.stringify(project));
}

function getProjectStored(name){
    const result = JSON.parse(sessionStorage.getItem(name));
    return new Project(result.name, result.todoList);
}

export {storeProject, getProjectStored};