function createProject (name){
    let todoList = new Array();

    function addTodo(todo){
        todoList.push(todo);
    }
    return {name, todoList, addTodo};
}




export {createProject};