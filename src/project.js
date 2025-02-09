class Project{
    constructor(name){
        this.name = name,
        this.todoList = new Array()
    }

    addToProject(task){
        this.todoList.push(task)
    }
}

export{Project};