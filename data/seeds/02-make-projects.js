const projects = [
    {
        project_name: 'Repot Plants',
        project_description: 'Repot all plants with exposed roots',
        project_completed: false
    },
    {
        project_name: 'Deep Clean',
        project_description: 'Clean all nooks and crannies',
        project_completed: true
    }
]

const resources = [
    {
        resource_name: "Plant Store",
        resource_description: "A store for pots and soil"
    },
    {
        resource_name: 'Supermarket',
        resource_description: 'A store with cleaning supplies'
    }
]

const tasks = [
    {
        task_description: 'Unpot Plants',
        task_notes: 'Remove plants and shake off old dirt from plants',
        task_completed: true,
        project_id: 1
    },
    {
        task_description: 'Pot the Plants',
        task_notes: 'Add soil to bottom of pot, then insert plant, then put soil around the sides',
        task_completed: false,
        project_id: 1
    },
    {
        task_description: 'Clean baseboards',
        task_notes: 'Spray cleaner and clean',
        task_completed: true,
        project_id: 2
    },
    {
        task_description: 'Clean high surfaces',
        task_notes: 'Dust then spray cleaner and clean top of cabinets and fan',
        task_completed: false,
        project_id: 2
    },
    {
        task_description: 'Clean bathroom tiles',
        task_notes: 'Use mold removing cleaner between shower tiles',
        task_completed: false,
        project_id: 2
    },
]

exports.seed = async function (knex) {
    await knex('projects').insert(projects)
    console.log('projects inserted')
    await knex('resources').insert(resources)
    console.log('resources inserted')
    await knex('tasks').insert(tasks)
    console.log('tasks inserted')
}