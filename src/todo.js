
function createTodo (title, description, dueDate, priority){
    let isComplete  = false;

    return {title, description, dueDate, priority, isComplete}
}

export {createTodo}