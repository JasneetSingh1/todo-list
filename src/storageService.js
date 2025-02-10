function storeProject(project){
    sessionStorage.setItem(project.name, JSON.stringify(project));
}

function getProject(name){
    return JSON.parse(sessionStorage.getItem(name));
}

export {storeProject, getProject};