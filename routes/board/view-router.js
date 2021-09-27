const path = require('path')
const express = require('express')
const router = express.Router()
const { pool } = require('../../modules/mysql-init')

router.use('/:id', (req, res, next) => {
	req.app.locals.PAGE = 'VIEW'
	res.send('hi')
})

module.exports = router