// build your `/api/tasks` router here
const express = require('express')
const Task = require('./model')
const router = express.Router()

router.get('/', async (req, res, next) => {
    try {
        const tasks = await Task.getTasks()
        res.status(200).json(tasks)
    } catch (err) {
        next(err)
    }
  })

  router.post('/', async (req, res, next) => {
    try {
        const newTask = await Task.addTask(req.body)
        res.status(201).json({
            ...newTask,
            task_completed: !!newTask.task_completed
        })
    } catch (err) {
        next(err)
    }
  })

  module.exports = router 