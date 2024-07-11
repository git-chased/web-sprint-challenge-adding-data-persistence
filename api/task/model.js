// build your `Task` model here
const db = require('../../data/dbConfig')

async function getTasks() {
    const tasks = await db('tasks')
        .join('projects', 'projects.project_id', 'tasks.project_id' )
        .select(
            'tasks.task_id',
            'tasks.task_description',
            'tasks.task_notes',
            'tasks.task_completed',
            'projects.project_name',
            'projects.project_description'
        )
    return tasks.map(task => ({
        ...task,
        task_completed: !!task.task_completed
    }))
}

async function addTask(task) {
    const [newTask] = await db('tasks').insert(task).returning('*')
    return {
        ...newTask,
        task_completed: !!newTask.task_completed
    }
}

module.exports = {
    getTasks,
    addTask
}