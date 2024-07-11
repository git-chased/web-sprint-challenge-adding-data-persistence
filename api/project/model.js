// build your `Project` model here
const db = require('../../data/dbConfig')

async function getProjects() {
    const projects = await db('projects')
    return projects.map(project => ({
        ...project,
        project_completed: !!project.project_completed
    }))
}

async function addProject(project) {
    const [newProject] = await db('projects').insert(project).returning('*')
    return {
        ...newProject,
        project_completed: !!project.project_completed
    }
}


module.exports = {
    getProjects,
    addProject
}