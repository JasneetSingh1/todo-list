import { Project } from "./project";
import { Todo } from "./todo";

function storeProject(project){
    sessionStorage.setItem(project.name, JSON.stringify(project));
}

function getProjectStored(name){
    const result = JSON.parse(sessionStorage.getItem(name));
    const todos = result.todoList.map((todo) => {
    let newTodo = new Todo(todo.title, todo.description, todo.dueDate, todo.priority, todo.isComplete);
       return todo =  newTodo;
    })
    return new Project(result.name, todos);
}

function getAllProjects(){
    let archive = [],
    keys = Object.keys(sessionStorage),
    i = 0, 
    key;

    for (; key = keys[i]; i++) {
        archive.push( key);
    }

    return archive;
}

export {storeProject, getProjectStored, getAllProjects};