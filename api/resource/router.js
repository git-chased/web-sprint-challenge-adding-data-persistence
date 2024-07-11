// build your `/api/resources` router here
const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.json({ message: 'Resource router working' });
  })

  module.exports = router