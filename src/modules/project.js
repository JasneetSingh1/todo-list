import { storeProject, getProjectStored } from "./storageService";
import { createProjectDOM } from "./dom";

class Project{
    constructor(name){
        this.name = name,
        this.todoList = new Array(),
        storeProject(this);
        
    }

    addToProject(task){
        this.todoList.push(task)
        storeProject(this);
    }

    removeFromProject(task){
        this.todoList.splice(task, 1);
        let project = getProject(this.name);
        project.todoList.splice(task, 1);
        storeProject(project);
    }
}

export{Project};