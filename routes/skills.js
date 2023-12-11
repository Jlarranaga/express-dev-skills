var express = require('express')
var router = express.Router()
var skillsCtrl = require('../controllers/skills')

//All paths from here start with /skills, remember that

router.get('/', skillsCtrl.index)

router.get('/:id', skillsCtrl.show)

module.exports = router
