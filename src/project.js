function createProject (name){
    let todoList = new Array();

    return {name, todoList};
}

function addTodo(project, todo){
    project.push(todo);
}