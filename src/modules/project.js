import { storeProject, getProject } from "./storageService";
import { createProjectDOM } from "./dom";

class Project{
    constructor(name){
        this.name = name,
        this.todoList = new Array(),
        storeProject(this);
        createProjectDOM(this.name);
    }

    addToProject(task){
        this.todoList.push(task)
    }

    removeFromProject(task){
        this.todoList.splice(task, 1);
    }
}

export{Project};