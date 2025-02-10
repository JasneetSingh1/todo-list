import { storeProject, getProject } from "./storageService";

class Project{
    constructor(name){
        this.name = name,
        this.todoList = new Array(),
        storeProject(this);
    }

    addToProject(task){
        this.todoList.push(task)
    }

    removeFromProject(task){
        this.todoList.splice(task, 1);
    }
}

export{Project};