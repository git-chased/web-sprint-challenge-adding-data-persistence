// build your `/api/projects` router here
const express = require('express')
const Project = require('./model')
const router = express.Router()

router.get('/', async (req, res, next) => {
    try {
        const projects = await Project.getProjects()
        res.status(200).json(projects.map(project => ({
            ...project,
            project_completed: !!project.project_completed
        })))
    } catch (err) {
        next(err)
    }
})

router.post('/', async (req, res, next) => {
    try {
        const newProject = await Project.addProject(req.body)
        newProject.project_completed = !!newProject.project_completed
        res.status(201).json(newProject)
    } catch (err) {
        next(err)
    }
})

  module.exports = router