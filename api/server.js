// build your server here and require it from index.js
const express = require('express')
const server = express()
server.use(express.json())

const projectRouter = require('./project/router')
const resourceRouter = require('./resource/router')
const taskRouter = require('./task/router')

server.use('/api/recipes', projectRouter)
server.use('/api/resource', resourceRouter)
server.use('/api/task', taskRouter)

server.use('*', (req, res) => {
    res.json({api: 'mic check'})
})

server.use((err, req, res, next) => {
    res.status(500).json({
        message: err.message
    })
})

module.exports = server