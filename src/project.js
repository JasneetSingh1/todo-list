class Project{
    constructor(name){
        this.name = name,
        this.todoList = new Array()
    }

    addToProject(task){
        this.todoList.push(task)
    }

    removeFromProject(task){
        this.todoList.splice(task, 1);
    }
}

export{Project};