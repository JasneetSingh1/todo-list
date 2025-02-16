class Todo{
    constructor(title, description, dueDate, priority, isComplete){
        this.title = title,
        this.description = description,
        this.dueDate = dueDate,
        this.priority = priority,
        this.isComplete = isComplete;
    }

    toggleComplete(){
        this.isComplete = !this.isComplete;
    }

}

export {Todo};