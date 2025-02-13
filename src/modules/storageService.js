function storeProject(project){
    sessionStorage.setItem(project.name, JSON.stringify(project));
}

function getProjectStored(name){
    return JSON.parse(sessionStorage.getItem(name));
}

export {storeProject, getProjectStored};