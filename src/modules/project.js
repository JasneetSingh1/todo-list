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
        let list = getProject(this.name);
        console.log(list)
        list.todoList.push(task);
        storeProject(list);
    }

    removeFromProject(task){
        this.todoList.splice(task, 1);
        let list = getProject(this.name);
        list.todoList.splice(task, 1);
        storeProject(list);
    }
}

export{Project};